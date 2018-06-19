import React, { Component } from 'react';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Loading } from '../../../components/commons/loading';
import { ShowComponent } from '../../../components/commons/ifshow';
import { BarChart } from '../../../components/charts/charts';
import Tabela from '../../../components/commons/tabela';
import { env } from '../../../config/config';
import { limparBreadcrumbAction } from '../../main/redux/actions';
import { timeUpdateChart } from '../dashboard.magazine';

class GraficoCTE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloLista: '',
            showLista: false,
            grafico: {
                data: []
            },
            collumsListaNotas: [],
            dataListaNotas: []
        };
    }

    obterDadosGrafico() {
        Axios.get(`${env.server.url}/v1/magazine/cte`).then(value => {
            this.setState({
                grafico: {
                    data: value.data
                }
            });
            clearTimeout(this.timeCTE);
            this.timeCTE = setTimeout(() => this.obterDadosGrafico(), timeUpdateChart);
        });
    }

    obterColunasDaLista(tipo) {
        Axios.get(`${env.server.url}/v1/magazine/cte/cancelados/lista/collumns/${tipo}`).then(value => {
            this.setState({
                collumsListaNotas: value.data
            });
            clearTimeout(this.timeCollumns);
            this.timeLista = setTimeout(() => this.obterDadosLista(tipo), env.application.timeLoad);
        });
    }

    obterDadosLista(tipo) {
        Axios.get(`${env.server.url}/v1/magazine/cte/cancelados/lista/${tipo}`).then(value => {
            console.log(value.data);
            this.setState({
                dataListaNotas: value.data
            });
            clearTimeout(this.timeLista);
        });
    }

    componentDidMount() {
        this.timeCTE = setTimeout(() => this.obterDadosGrafico(), env.application.timeLoad);
        this.props.limparBreadcrumbAction();
    }

    componentWillUnmount() {
        clearTimeout(this.timeCTE);
        clearTimeout(this.timeCollumns);
        clearTimeout(this.timeLista);
    }

    clickBar(index, valor, nome, dataContext) {
        if (nome === 'Cancelados') {
            console.log(dataContext.name_id);
            this.setState({
                ...this.state,
                tituloLista: nome,
                showLista: true,
                dataListaNotas: []
            });
            this.timeCollumns = setTimeout(() => this.obterColunasDaLista(dataContext.name_id), env.application.timeLoad);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl">
                        <div className="card card-primary card-outline">
                            <div className="card-header"><h6>Conhecimento de Transporte Eletrônico</h6></div>
                            <div className="card-body">
                                <Loading show={this.state.grafico.data.length == 0} message="Calculando gráfico..."/>
                                <ShowComponent show={this.state.grafico.data.length > 0}>
                                    <BarChart dataProvider={this.state.grafico.data} chart3D={true} export={true} color={true}
                                              click={(index, valor, nome, dadosBarra) => this.clickBar(index, valor, nome, dadosBarra)}/>
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

const mapAction = dispatch => bindActionCreators({ limparBreadcrumbAction }, dispatch);
export default connect(null, mapAction)(GraficoCTE);