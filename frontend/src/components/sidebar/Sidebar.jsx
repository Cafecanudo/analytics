import React, {Component} from 'react'
import LogoFavicon from './LogoFavicon'
import DadosUsuario from "../commons/Usuario";
import Axios from 'axios';
import {env} from '../../main/config/config';
import SidebarMenu from "./SidebarMenu";

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Obter dados de perfil do usuario logado
     */
    obterPerfilUsuario() {
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
        this.timerID = setInterval(() => this.obterPerfilUsuario(), 500);
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
                        <SidebarMenu/>
                    </div>
                </aside>
                <div id="sidebar-overlay"></div>
            </div>
        )
    }
}