import React, { Component } from 'react';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Loading } from '../../../components/commons/loading';
import { ShowComponent } from '../../../components/commons/ifshow';
import { BarChart, PieChart } from '../../../components/charts/charts';
import { env } from '../../../config/config';
import Tabela from '../../../components/commons/tabela';
import { timeUpdateChart } from '../dashboard.magazine';
import { atualizarBreadcrumbAction } from '../../main/redux/actions';

class GraficoNFE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloLista: '',
            showLista: false,
            tituloChild: '',
            showGraficoChild: false,
            grafico: {
                data: [],
                dataChild: []
            },
            collumsListaNotas: [],
            dataListaNotas: []
        };
    }

    obterDadosGrafico() {
        Axios.get(`${env.server.url}/v1/magazine/nfe`).then(value => {
            this.setState({
                showLista: false,
                grafico: {
                    ...this.state.grafico,
                    data: value.data
                }
            });
            clearTimeout(this.timeNFSE);
            this.timeNFE = setTimeout(() => this.obterDadosGrafico(), timeUpdateChart);
        });
    }

    obterDadosGraficoChild() {
        Axios.get(`${env.server.url}/v1/magazine/nfe/pendentes`).then(value => {
            this.setState({
                dataListaNotas: [],
                grafico: {
                    ...this.state.grafico,
                    dataChild: value.data
                }
            });
            clearTimeout(this.timeNFSE);
        });
    }

    obterColunasDaLista(tipo) {
        Axios.get(`${env.server.url}/v1/magazine/nfe/pendentes/lista/collumns/${tipo}`).then(value => {
            this.setState({
                collumsListaNotas: value.data
            });
            clearTimeout(this.timeNFE);
            this.timeCollumns = setTimeout(() => this.obterDadosLista(tipo), env.application.timeLoad);
        });
    }

    obterDadosLista(tipo) {
        Axios.get(`${env.server.url}/v1/magazine/nfe/pendentes/lista/${tipo}`).then(value => {
            console.log(value.data);
            this.setState({
                dataListaNotas: value.data
            });
            clearTimeout(this.timeNFE);
        });
    }

    componentDidMount() {
        this.timeNFE = setTimeout(() => this.obterDadosGrafico(), env.application.timeLoad);
    }

    componentWillUnmount() {
        clearTimeout(this.timeNFE);
        clearTimeout(this.timeCollumns);
        this.props.atualizarBreadcrumbAction({
            title: 'NF-E'
        });
    }

    clickPrincipal(index, valor, nome) {
        if (nome === 'Pendentes') {
            this.setState({
                ...this.state,
                tituloChild: nome,
                showGraficoChild: true
            });
            clearTimeout(this.timeNFSE);
            this.timeNFE = setTimeout(() => this.obterDadosGraficoChild(), env.application.timeLoad);
        }
    }

    clickChild(index, valor, nome, dataContext) {
        this.setState({
            ...this.state,
            tituloLista: nome,
            showLista: true,
            dataListaNotas: []
        });
        clearTimeout(this.timeNFSE);
        this.timeNFE = setTimeout(() => this.obterColunasDaLista(dataContext.name_id), env.application.timeLoad);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl">
                        <div className="card card-primary card-outline">
                            <div className="card-header"><h6>Nota Fiscal Eletr&ocirc;nica</h6></div>
                            <div className="card-body">
                                <Loading show={this.state.grafico.data.length == 0} message="Calculando gráfico..."/>
                                <ShowComponent show={this.state.grafico.data.length > 0}>
                                    <BarChart dataProvider={this.state.grafico.data} chart3D={true} export={true} color={true}
                                              click={(index, valor, nome, dadosBarra) => this.clickPrincipal(index, valor, nome, dadosBarra)}/>
                                </ShowComponent>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl" style={{ display: this.state.showGraficoChild ? 'block' : 'none' }}>
                        <div className="card card-primary card-outline">
                            <div className="card-header"><h6>{this.state.tituloChild}</h6></div>
                            <div className="card-body">
                                <Loading show={this.state.grafico.dataChild.length == 0} message="Calculando gráfico..."/>

                                <ShowComponent show={this.state.grafico.dataChild.length > 0}>
                                    <PieChart dataProvider={this.state.grafico.dataChild} chart3D={true} export={true}
                                              click={(index, valor, nome, dadosBarra) => this.clickChild(index, valor, nome, dadosBarra)}/>
                                </ShowComponent>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ display: this.state.showLista ? 'block' : 'none' }}>
                    <div className="col-xl">
                        <Tabela titulo={this.state.tituloLista} show={this.state.dataListaNotas.length > 0}
                                collumns={this.state.collumsListaNotas} provider={this.state.dataListaNotas} showLoading={true}
                                textLoading="Calculando gráfico..."/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapAction = dispatch => bindActionCreators({ atualizarBreadcrumbAction }, dispatch);
export default connect(null, mapAction)(GraficoNFE);