import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { env } from '../../config/config';
import { atualizarNotificacoesAction } from './redux/actions';

class HeaderMenu extends Component {

    processarListaNotificacoes() {
        return this.props.notificacao.lista.map((notificacao, index) => (
            <data key={index}>
                <div className="dropdown-divider"></div>
                <Link to={`/notificacao/tipo/${notificacao.tipo}`} className={'dropdown-item'}>
                    <i className={`mr-2 ${notificacao.icone}`}></i> {notificacao.quant} {notificacao.descricao}
                    <span className="float-right text-muted text-sm">{notificacao.ultima}</span>
                </Link>
            </data>
        ));
    }

    componentDidMount() {
        setTimeout(() => {
            Axios.get(`${env.server.url}/v1/usuario/perfil/notificacao-resumo`).then(value => {
                this.props.atualizarNotificacoesAction(value.data.notificacao);
                clearInterval(this.timerID);
                this.timerID = setInterval(() => this.componentDidMount(), 60000);
            });
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        $('#sidebar-overlay').click(function () {
            $('body').toggleClass('sidebar-open sidebar-collapse');
        });
    }

    collapseMenu() {
        $('body').toggleClass('sidebar-open sidebar-collapse');
    }

    render() {
        return (
            <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" onClick={this.collapseMenu} style={{cursor: 'pointer'}}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to={this.props.urlInicial} className="nav-link">Inicio</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell-o"></i>
                            <span className={`badge navbar-badge badge-${this.props.notificacao.bellColor || 'info'}`}
                                  style={{ display: this.props.notificacao.lista.length === 0 ? 'none' : '' }}>
                                {this.props.notificacao.lista.length}
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span
                                className="dropdown-item dropdown-header">{this.props.notificacao.bellQuant || 0} Notificações</span>
                            {this.processarListaNotificacoes()}
                            <div className="dropdown-divider"></div>
                            <Link to={'/notificacao'} className={'dropdown-item dropdown-footer'}>
                                Todas Notificações
                            </Link>
                        </div>
                    </li>
                    {this.opcoesExtrasLivre()}
                </ul>
            </nav>
        );
    }

    opcoesExtrasLivre() {
        return (
            <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                    <i className="fa fa-television"></i>
                </a>
            </li>
        );
    }
}

const mapProps = state => {
    const _curr = state.headerMenuReducer;
    return { notificacao: _curr.notificacao, urlInicial: _curr.urlInicial };
};
const mapAction = dispatch => bindActionCreators({ atualizarNotificacoesAction }, dispatch);
export default connect(mapProps, mapAction)(HeaderMenu);