import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { atualizarBreadcrumbAction } from '../main/redux/actions';

class Inicio extends Component {

    componentDidMount(){
        this.props.atualizarBreadcrumbAction({
            title: 'Inicio'
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-info">
                            <div className="inner">
                                <h3>1.251</h3>
                                <p>Notas transmitidas</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-bag"></i>
                            </div>
                            <a href="#" className="small-box-footer">Mais <i
                                className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-success">
                            <div className="inner">
                                <h3>4.5%</h3>
                                <p>Notas</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-stats-bars"></i>
                            </div>
                            <a href="#" className="small-box-footer">Mais <i
                                className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-warning">
                            <div className="inner">
                                <h3>44ms</h3>
                                <p>Tempo</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-person-add"></i>
                            </div>
                            <a href="#" className="small-box-footer">Mais <i
                                className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-danger">
                            <div className="inner">
                                <h3>65</h3>
                                <p>Notas</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-pie-graph"></i>
                            </div>
                            <a href="#" className="small-box-footer">Mais <i
                                className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pagina Demo</h5>
                                <div id="chartdivStacked"></div>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                                    corporis debitis
                                    ea facilis fugit, illum magni molestias, non perspiciatis possimus
                                    totam.
                                </p>
                                <a href="#" className="card-link">Link</a>
                            </div>
                        </div>

                        <div className="card card-primary card-outline">
                            <div className="card-body">
                                <h5 className="card-title">Página Demo 2</h5>
                                <div id="chartDuration"></div>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At hic nemo,
                                    nihil non
                                    officia porro quasi rerum tempore? Commodi facilis, ipsam.
                                </p>
                                <a href="#" className="card-link">Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="m-0">Outra Pagina</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Página titulo destacado</h6>
                                <div id="chartAreaTime"></div>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Ab
                                    nesciunt sapiente soluta.</p>
                                <a href="#" className="btn btn-primary">Consultar</a>
                            </div>
                        </div>

                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h5 className="m-0">Outra Pagina</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Página titulo destacado</h6>

                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Ex quae
                                    ullam voluptatem.</p>

                                <div id="chartdivDrillDown"></div>

                                <a href="#" className="btn btn-primary">Consultar Dados</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapAction = dispatch => bindActionCreators({ atualizarBreadcrumbAction }, dispatch);
export default connect(null, mapAction)(Inicio);