import React, {Component} from 'react'
import Axios from "axios/index";
import {env} from "../../main/config/config";

export default class SidebarMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            perfil: {
                dashboards: [],
                grupo_menus: []
            }
        }
    }

    obterMenusPerfil() {
        Axios.get(`${env.server.url}/v1/usuario/perfil/menu`).then(value => {
            this.setState({
                perfil: value.data
            });
            clearInterval(this.timerID);
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.obterMenusPerfil(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getDashboard() {
        const _dash = this.state.perfil.dashboards.map((dash, index) => (
            <li key={index} className="nav-item" title={dash.hint || ''}>
                <a href={`#/dashboard/${dash.name || 'sem-dashboards'}`} className="nav-link">
                    <i className={`nav-icon ${dash.icone}`}></i>
                    <p>{dash.descricao}</p>
                </a>
            </li>
        ));
        return (
            <li className="nav-item has-treeview" sc-down={this.state.perfil.dashboards.length * 43}>
                <a href="#" className="nav-link">
                    <i className={`nav-icon fa fa-${this.state.perfil.dashboards.length > 0 ? 'dashboard' : 'spinner fa-pulse fa-3x fa-fw'}`}></i>
                    <p>
                        {this.state.perfil.dashboards.length > 0 ? 'Dashboard' : 'Carregando...'}
                        <i className="right fa fa-angle-left"></i>
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    {_dash}
                </ul>
            </li>
        );
    }

    getGroupMenus(_m, index) {
        if (Array.isArray(_m)) {
            return _m.map((menu, index) => {
                if (menu.menus) {
                    return [(menu.titulo ? <li key={`title_${index}`}
                                               className="nav-header">{menu.titulo}</li> : ''), this.getGroupMenus(menu.menus)];
                } else {
                    return this.getGroupMenus(menu, index);
                }
            });
        } else {
            const menu = _m;
            return (
                <li key={index} id="monitor" className="nav-item has-treeview">
                    <a href={`#/${menu.tipo === 'PAGE' ? menu.url : `perfil/acesso/${menu.name}`}`}
                       className="nav-link">
                        <i className={`nav-icon ${menu.icone}`}></i>
                        <p>{menu.descricao}</p>
                    </a>
                </li>
            );
        }
    }

    render() {
        return (
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    {this.getDashboard()}
                    {this.getGroupMenus(this.state.perfil.grupo_menus)}
                </ul>
            </nav>
        );
    }

    componentDidUpdate() {
        this.setActionMenus();
    }

    setActionMenus() {
        $('.nav-sidebar .has-treeview > .nav-link').unbind().click(function () {
            if ($(this).parent().hasClass('menu-open')) {
                $(this).removeClass('active').parent().removeClass('menu-open').css({height: 40});
            } else {
                $(this).addClass('active').parent().addClass('menu-open')
                    .css({height: parseInt($(this).parent().attr('sc-down')) + 45});
            }
        });
    }
}