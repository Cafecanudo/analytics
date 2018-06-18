import React, { Component } from 'react';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { env } from '../../config/config';
import { atulizarPerfilMenuAction } from './redux/actions';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullscreenMode: false
        };

        document.addEventListener('fullscreenchange', (e) => {
            $('body').toggleClass('fullscreen-mode sidebar-open sidebar-collapse');
        });
        document.addEventListener('mozfullscreenchange', (e) => {
            $('body').toggleClass('fullscreen-mode sidebar-open sidebar-collapse');
        });
        document.addEventListener('webkitfullscreenchange', (e) => {
            $('body').toggleClass('fullscreen-mode sidebar-open sidebar-collapse');
        });
        document.addEventListener('msfullscreenchange', (e) => {
            $('body').toggleClass('fullscreen-mode sidebar-open sidebar-collapse');
        });

        $(document).keyup((e) => {
            if (e.which == 122) {
                this.hideComponentFullscreen(this.state.fullscreenMode);
            }
        });
    }

    hideComponentFullscreen(status) {
        console.log(status);
        if (status) {
            $('body').addClass('fullscreen-mode sidebar-open sidebar-collapse');
        } else {
            $('body').removeClass('fullscreen-mode sidebar-open sidebar-collapse');
        }
    }

    toggleFullScreen() {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            this.hideComponentFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            this.hideComponentFullscreen(false);
        }
    }

    obterDashboard() {
        return (
            <li className="nav-item has-treeview" sc-down={this.props.perfil.dashboards.length * 43}>
                <a className="nav-link">
                    <i className={`nav-icon fa fa-${this.props.perfil.dashboards.length > 0 ? 'dashboard' : 'spinner fa-pulse fa-3x fa-fw'}`}></i>
                    <p>
                        {this.props.perfil.dashboards.length > 0 ? 'Dashboard' : 'Carregando...'}
                        <i className="right fa fa-angle-left"></i>
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    {this.props.perfil.dashboards.map((dash, index) => {
                        const _path = `/dashboard/${dash.name || 'sem-dashboards'}`;
                        return (
                            <li key={index} className="nav-item" title={dash.hint || ''}>
                                {dash.principal ? <Redirect to={_path}/> : ''}
                                <NavLink to={_path} className={'nav-link'} activeClassName="active-sub">
                                    <i className={`nav-icon ${dash.icone}`}></i>
                                    <p>{dash.descricao}</p>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }

    processarGroupMenus(_m, index) {
        if (Array.isArray(_m)) {
            return _m.map((menu, index) => {
                if (menu.menus) {
                    return [(menu.titulo ? <li key={`title_${index}`}
                                               className="nav-header">{menu.titulo}</li> : ''), this.processarGroupMenus(menu.menus)];
                } else {
                    return this.processarGroupMenus(menu, index);
                }
            });
        } else {
            const menu = _m;
            return (
                <li key={index} id="monitor" className="nav-item has-treeview">
                    <NavLink to={`/${menu.tipo === 'PAGE' ? menu.url : `grafico/${menu.name}`}`}
                             className={'nav-link'} activeClassName="active-sub" title={menu.hint}>
                        <i className={`nav-icon ${menu.icone}`}></i>
                        <p>{menu.descricao}</p>
                    </NavLink>
                </li>
            );
        }
    }

    obterMenusPerfil() {
        Axios.get(`${env.server.url}/v1/usuario/perfil/menu`).then(value => {
            this.props.atulizarPerfilMenuAction(value.data);
        });
    }

    componentDidMount() {
        setTimeout(() => this.obterMenusPerfil(), 100);
    }

    render() {
        return (
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <li id="monitor" className="nav-item has-treeview">
                        <a className="nav-link" onClick={() => this.toggleFullScreen()} style={{cursor: 'pointer'}}>
                            <i className="nav-icon fa fa-television"></i>
                            <p>Modo Monitor</p>
                        </a>
                    </li>
                    {this.obterDashboard()}
                    {this.processarGroupMenus(this.props.perfil.grupo_menus)}
                </ul>
            </nav>
        );
    }

    componentDidUpdate() {
        this.setActionMenus();
    }

    setActionMenus() {
        $('.nav-sidebar .has-treeview:has(ul) > .nav-link').unbind().click(function () {
            if ($(this).parent().hasClass('menu-open')) {
                $(this).removeClass('active').parent().removeClass('menu-open').css({ height: 40 });
            } else {
                $(this).addClass('active').parent().addClass('menu-open')
                    .css({ height: parseInt($(this).parent().attr('sc-down')) + 45 });
            }
        });
    }
}

const mapProps = state => ({ perfil: state.sidebarReducer.perfil });
const mapAction = dispatch => bindActionCreators({ atulizarPerfilMenuAction }, dispatch);
export default connect(mapProps, mapAction)(Menu);
