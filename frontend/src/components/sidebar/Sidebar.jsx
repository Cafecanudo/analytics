import React, {Component} from 'react'
import LogoFavicon from './LogoFavicon'
import DadosUsuario from "../commons/Usuario";
import Axios from 'axios';
import {env} from '../../main/config/config';
import Menu from "./Menu";

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Obter dados de perfil do usuario logado
     */
    getPerfilUsuario() {
        Axios.get(`${env.server.url}/v1/usuario/perfil`).then(value => {
            this.setState({
                usuario: value.data
            });
            clearInterval(this.timerID);
        });
    }

    componentDidMount() {
        $('#sidebar-overlay').click(function () {
            $('body').toggleClass('sidebar-open sidebar-collapse');
        });
        this.timerID = setInterval(() => this.getPerfilUsuario(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <LogoFavicon/>
                    <div className="sidebar">

                        <DadosUsuario usuario={this.state.usuario || {}}/>
                        <Menu/>
                    </div>
                </aside>
                <div id="sidebar-overlay"></div>
            </div>
        )
    }
}