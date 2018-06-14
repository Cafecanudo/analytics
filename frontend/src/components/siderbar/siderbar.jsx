import React from 'react';
import DadosUsuario from './usuario';
import LogoFavicon from './logo.favicon';
import Menu from './menu';

export const Sidebar = () => (
    <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <LogoFavicon/>
            <div className="sidebar">
                <DadosUsuario/>
                <Menu/>
            </div>
        </aside>
        <div id="sidebar-overlay"></div>
    </div>
);