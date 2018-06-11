import React, {Component} from "react";
import Axios from "axios/index";
import {env} from "../main/config/config";

export default class HeaderMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notificacao: [],
            bellColor: 'info',
            bellQuant: 0
        }
    }

    obterNotificacoesResumo() {
        Axios.get(`${env.server.url}/v1/usuario/perfil/notificacao-resumo`).then(value => {
            this.setState(value.data);
            this.setBellColor();
            //clearInterval(this.timerID);
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.obterNotificacoesResumo(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    setBellColor() {
        let quant = 0;
        this.state.notificacao.forEach(el => {
            if (el.tipo === 'ALERTAS') {
                this.setState({bellColor: 'danger'});
            }
            quant += el.quant
        });
        this.setState({bellQuant: quant});
    }

    obterNotificacoesList() {
        return this.state.notificacao.map((notificacao, index) => (
            <data key={index}>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    <i className={`mr-2 ${notificacao.icone}`}></i> {notificacao.quant} {notificacao.descricao}
                    <span className="float-right text-muted text-sm">{notificacao.ultima}</span>
                </a>
            </data>
        ));
    }

    render() {
        return (
            <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#/inicio" className="nav-link">Inicio</a>
                    </li>
                </ul>

                {/*Right navbar links*/}
                <ul className="navbar-nav ml-auto">
                    {/*Notifications Dropdown Menu*/}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell-o"></i>
                            <span className={`badge navbar-badge badge-${this.state.bellColor}`}
                                  style={{display: this.state.notificacao.length === 0 ? 'none' : ''}}>{this.state.bellQuant}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">{this.state.bellQuant} Notificações</span>
                            {this.obterNotificacoesList()}
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">Todas Notificações</a>
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