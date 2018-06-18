import React, { Component } from 'react';
import Axios from 'axios';

import { ShowComponent } from '../../components/commons/ifshow';
import { BarChart } from '../../components/charts/charts';
import { Loading } from '../../components/commons/loading';
import { env } from '../../config/config';

export const timeUpdateChart = 60 * 1000;

export default class DashboardMagazine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloLista: '',
            tituloChild: '',
            showGraficoChild: false,
            grafico: {
                dataNFSE: [],
                dataNFE: [],
                dataCTE: []
            }
        };
    }

    obterDadosGraficoNFSE() {
        Axios.get(`${env.server.url}/v1/magazine/nfse`).then(value => {
            this.setState({
                grafico: {
                    ...this.state.grafico,
                    dataNFSE: value.data
                }
            });
            clearTimeout(this.timeNFSE);
            this.timeNFSE = setTimeout(() => this.obterDadosGraficoNFSE(), timeUpdateChart);
        });
    }

    obterDadosGraficoNFE() {
        Axios.get(`${env.server.url}/v1/magazine/nfe`).then(value => {
            this.setState({
                grafico: {
                    ...this.state.grafico,
                    dataNFE: value.data
                }
            });
            clearTimeout(this.timeNFE);
            this.timeCTE = setTimeout(() => this.obterDadosGraficoNFE(), timeUpdateChart);
        });
    }

    obterDadosGraficodCTE() {
        Axios.get(`${env.server.url}/v1/magazine/cte`).then(value => {
            this.setState({
                grafico: {
                    ...this.state.grafico,
                    dataCTE: value.data
                }
            });
            clearTimeout(this.timeCTE);
            this.timeNFE = setTimeout(() => this.obterDadosGraficodCTE(), timeUpdateChart);
        });
    }

    componentDidMount() {
        this.timeNFSE = setTimeout(() => this.obterDadosGraficoNFSE(), env.application.timeLoad);
        this.timeCTE = setTimeout(() => this.obterDadosGraficoNFE(), env.application.timeLoad);
        this.timeNFE = setTimeout(() => this.obterDadosGraficodCTE(), env.application.timeLoad);
    }

    componentWillUnmount() {
        clearTimeout(this.timeID);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl">
                        <div className="card card-primary card-outline">
                            <div className="card-header"><h6>Nota Fiscal de Servi&ccedil;os Eletr&ocirc;nica</h6></div>
                            <div className="card-body">
                                <Loading show={this.state.grafico.dataNFSE.length == 0} message="Calculando gráfico..."/>
                                <ShowComponent show={this.state.grafico.dataNFSE.length > 0}>
                                    <BarChart dataProvider={this.state.grafico.dataNFSE} chart3D={true} export={true} color={true}
                                              clickGraph={() => {
                                                  this.props.history.replace(`/grafico/notas-nfs-e`);
                                              }}/>
                                </ShowComponent>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl">
                        <div className="card card-primary card-outline">
                            <div className="card-header"><h6>Nota Fiscal Eletr&ocirc;nica</h6></div>
                            <div className="card-body">
                                <Loading show={this.state.grafico.dataNFE.length == 0} message="Calculando gráfico..."/>
                                <ShowComponent show={this.state.grafico.dataNFE.length > 0}>
                                    <BarChart dataProvider={this.state.grafico.dataNFE} chart3D={true} export={true} color={true}
                                              clickGraph={() => {
                                                  this.props.history.replace(`/grafico/notas-nf-e`);
                                              }}/>
                                </ShowComponent>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl">
                        <div className="card card-primary card-outline">
                            <div className="card-header"><h6>Conhecimento de Transporte Eletr&ocirc;nico</h6></div>
                            <div className="card-body">
                                <Loading show={this.state.grafico.dataCTE.length == 0} message="Calculando gráfico..."/>
                                <ShowComponent show={this.state.grafico.dataCTE.length > 0}>
                                    <BarChart dataProvider={this.state.grafico.dataCTE} chart3D={true} export={true} color={true}
                                              clickGraph={() => {
                                                  this.props.history.replace(`/grafico/notas-ct-e`);
                                              }}/>
                                </ShowComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
