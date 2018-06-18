import React, { Component } from 'react';
import { ShowComponent } from '../../components/commons/ifshow';
import { BarChart } from '../../components/charts/charts';
import { Loading } from '../../components/commons/loading';
import { env } from '../../config/config';

export default class DashboardMagazine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloLista: '',
            showLista: false,
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
        this.setState({
            showLista: false,
            grafico: {
                ...this.state.grafico,
                dataNFSE: [{
                    'display_name': 'Liberados',
                    'value_data': 3025,
                    'color_data': '#007f1e'
                }, {
                    'display_name': 'Pendentes',
                    'value_data': 1882,
                    'color_data': '#ff0600'
                }, {
                    'display_name': 'Cancelados',
                    'value_data': 1809,
                    'color_data': '#ff3900'
                }, {
                    'display_name': 'Sem PO',
                    'value_data': 1322,
                    'color_data': '#ff6f03'
                }]
            }
        });
        this.timeID = setTimeout(() => this.obterDadosGraficodNFE(), env.application.timeLoad);
    }

    obterDadosGraficodNFE() {
        this.setState({
            showLista: false,
            grafico: {
                ...this.state.grafico,
                dataNFE: [{
                    'display_name': 'Liberados',
                    'value_data': 3025,
                    'color_data': '#007f1e'
                }, {
                    'display_name': 'Pendentes',
                    'value_data': 1882,
                    'color_data': '#ff0600'
                }, {
                    'display_name': 'Cancelados',
                    'value_data': 1809,
                    'color_data': '#ff3900'
                }, {
                    'display_name': 'Sem PO',
                    'value_data': 1322,
                    'color_data': '#ff6f03'
                }]
            }
        });
        this.timeID = setTimeout(() => this.obterDadosGraficodCTE(), env.application.timeLoad);
    }

    obterDadosGraficodCTE() {
        this.setState({
            showLista: false,
            grafico: {
                ...this.state.grafico,
                dataCTE: [{
                    'display_name': 'Liberados',
                    'value_data': 3025,
                    'color_data': '#007f1e'
                }, {
                    'display_name': 'Pendentes',
                    'value_data': 1882,
                    'color_data': '#ff0600'
                }, {
                    'display_name': 'Cancelados',
                    'value_data': 1809,
                    'color_data': '#ff3900'
                }, {
                    'display_name': 'Sem PO',
                    'value_data': 1322,
                    'color_data': '#ff6f03'
                }]
            }
        });
    }

    componentDidMount() {
        this.timeID = setTimeout(() => this.obterDadosGraficoNFSE(), env.application.timeLoad);
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
                            <div className="card-header"><h6>Nota Fiscal Eletr&ocirc;nica</h6></div>
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
                            <div className="card-header"><h6>Nota Fiscal de Servi&ccedil;os Eletr&ocirc;nica</h6></div>
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
