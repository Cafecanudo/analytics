import React, { Component } from 'react';
import Axios from 'axios/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { env } from '../main/config/config';
import { atualizarNotificacao } from './templates/top-menu/__redux';

class HeaderMenu extends Component {

    constructor(props) {
        super(props);
        this.intervalUpdateNotifications = 30000;
        this.state = {
            notificacao: [],
            bellColor: 'info',
            bellQuant: 0
        };
    }

    obterNotificacoesResumo() {
        Axios.get(`${env.server.url}/v1/usuario/perfil/notificacao-resumo`).then(value => {
            const notificacoes = value.data;
            console.log(notificacoes);

            this.props.atualizarNotificacao(notificacoes);
            //this.setState(value.data);
            // this.setBellColor();
            // clearInterval(this.timerID);
            // this.timerID = setInterval(() => this.obterNotificacoesResumo(), this.intervalUpdateNotifications);
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.obterNotificacoesResumo(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    setBellColor() {
        /*let quant = 0;
        this.state.notificacao.forEach(el => {
            if (el.tipo === 'ALERTAS') {
                this.setState({ bellColor: 'danger' });
            }
            quant += el.quant;
        });
        this.setState({ bellQuant: quant });*/
    }

    obterNotificacoesList() {
        console.log(this.props);
        return this.props.notificacao.map((notificacao, index) => (
            <data key={index}>
                <div className="dropdown-divider"></div>
                <Link to={`/notificacao/tipo/${notificacao.tipo}`} className={'dropdown-item'}>
                    <i className={`mr-2 ${notificacao.icone}`}></i> {notificacao.quant} {notificacao.descricao}
                    <span className="float-right text-muted text-sm">{notificacao.ultima}</span>
                </Link>
            </data>
        ));
    }

    render() {
        console.log(this.props);
        return (
            <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                </ul>

                {/*Right navbar links*/}
                <ul className="navbar-nav ml-auto">
                    {/*Notifications Dropdown Menu*/}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell-o"></i>
                            <span className={`badge navbar-badge badge-${this.state.bellColor}`}
                                  style={{ display: this.state.notificacao.length === 0 ? 'none' : '' }}>{this.state.bellQuant}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">{this.state.bellQuant} Notificações</span>
                            {this.obterNotificacoesList()}
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

const stateProps = state => ({ notificacao: state.headermenu });
const dispatchPros = dispatch => bindActionCreators({
    atualizarNotificacao
}, dispatch);
export default connect(stateProps, dispatchPros)(HeaderMenu);

