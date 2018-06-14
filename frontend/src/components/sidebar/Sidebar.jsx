import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import LogoFavicon from './LogoFavicon';
import DadosUsuario from '../templates/usuario/Usuario';
import SidebarMenu from './SidebarMenu';
import { env } from '../../main/config/config';
import { changeUsuarioLoginAction } from '../templates/usuario/actions';
import { bindActionCreators } from 'redux';

class Sidebar extends Component {

    /**
     * Obter dados de perfil do usuario logado
     */
    obterPerfilUsuario() {
        Axios.get(`${env.server.url}/v1/usuario/perfil`).then(value => {
            this.props.changeUsuarioLoginAction(value.data);
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
                        <DadosUsuario/>
                        <SidebarMenu/>
                    </div>
                </aside>
                <div id="sidebar-overlay"></div>
            </div>
        );
    }
}

const dispatchPros = dispatch => bindActionCreators({
    changeUsuarioLoginAction
}, dispatch);
export default connect(null, dispatchPros)(Sidebar);