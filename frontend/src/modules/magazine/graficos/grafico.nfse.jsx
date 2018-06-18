import React, { Component } from 'react';

import { env } from '../../../config/config';
import { Loading } from '../../../components/commons/loading';
import { ShowComponent } from '../../../components/commons/ifshow';
import { BarChart, PieChart } from '../../../components/charts/charts';
import Tabela from '../../../components/commons/tabela';

export default class GraficoNFSE extends Component {

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
            collumsListaNotas: [
                {
                    display: 'Número', name: 'numero'
                },
                {
                    display: 'Tipo', name: 'tipo', width: 100
                },
                {
                    display: 'Descrição', name: 'descricao'
                },
                {
                    display: 'Cidade', name: 'cidade'
                },
                {
                    display: 'UF', name: 'uf', width: 40
                }
            ],
            dataListaNotas: []
        };
    }

    obterDadosGrafico() {
        this.setState({
            showLista: false,
            grafico: {
                ...this.state.grafico,
                data: [{
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

    obterDadosGraficoChild() {
        this.setState({
            dataListaNotas: [],
            grafico: {
                ...this.state.grafico,
                dataChild: [
                    {
                        'display_name': 'Erros Integrações',
                        'value_data': 1882
                    }, {
                        'display_name': 'Erros Batimentos',
                        'value_data': 1809
                    }, {
                        'display_name': 'Falta PO',
                        'value_data': 1322
                    }, {
                        'display_name': 'Repovado',
                        'value_data': 1122
                    }, {
                        'display_name': 'Duplicidade',
                        'value_data': 1114
                    }
                ]
            }
        });
    }

    obterDadosLista() {
        this.setState({
            dataListaNotas: [
                {
                    numero: '843b174f9753ad386ae2112d62f21166',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 1',
                    cidade: 'Goiania',
                    uf: 'GO'
                },
                {
                    numero: '34adbf92c082f8092fd28de4ef114e65',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 2',
                    cidade: 'Goiania',
                    uf: 'GO'
                },
                {
                    numero: '5aae839318ec9c097865a2e37f94b1e1',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 3',
                    cidade: 'Goiania',
                    uf: 'GO'
                }
            ]
        });
    }

    componentDidMount() {
        this.timeID = setTimeout(() => this.obterDadosGrafico(), env.application.timeLoad);
    }

    componentWillUnmount() {
        clearTimeout(this.timeID);
    }

    clickPrincipal(index, valor, nome) {
        if (nome === 'Pendentes') {
            this.setState({
                ...this.state,
                tituloChild: nome,
                showGraficoChild: true
            });
            this.timeID = setTimeout(() => this.obterDadosGraficoChild(), env.application.timeLoad);
        }
    }

    clickChild(index, valor, nome) {
        this.setState({
            ...this.state,
            tituloLista: nome,
            showLista: true,
            dataListaNotas: []
        });
        this.timeID = setTimeout(() => this.obterDadosLista(), env.application.timeLoad);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl">
                        <div className="card card-primary card-outline">
                            <div className="card-header"><h6>Nota Fiscal de Servi&ccedil;os Eletr&ocirc;nica</h6></div>
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
                    <div className="col">
                        <Tabela titulo={this.state.tituloLista} show={this.state.dataListaNotas.length > 0}
                                collumns={this.state.collumsListaNotas} provider={this.state.dataListaNotas} showLoading={true}
                                textLoading="Calculando gráfico..."/>
                    </div>
                </div>
            </div>
        );
    }
}
