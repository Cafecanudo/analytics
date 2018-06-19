import React, { Component } from 'react';
import DadosUsuario from './usuario';
import LogoFavicon from './logo.favicon';
import Menu from './menu';

export default class Sidebar extends Component {

    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <LogoFavicon/>
                    <div className="sidebar">
                        {/*<DadosUsuario/>*/}
                        <Menu/>
                    </div>
                </aside>
                <div id="sidebar-overlay"></div>
            </div>
        );
    }
};
