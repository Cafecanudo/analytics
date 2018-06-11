import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {Component} from 'react'

import '../@core/dependencies'
import Sidebar from "../components/sidebar/Sidebar";
import HeaderMenu from "../components/HeaderMenu";
//paginas
import Inicio from '../components/pages/inicio'

export default class AppComponent extends Component {

    render() {
        return (
            <div className="wrapper">
                <HeaderMenu/>
                <Sidebar/>

                {/*Content Wrapper. Contains page content*/}
                <div className="content-wrapper">

                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Dashboard Resumo</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Resumo</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <BrowserRouter>
                            <Switch>
                                <Route exact={true} path="/" component={Inicio}/>
                                <Route path="/inicio" component={Inicio}/>
                            </Switch>
                        </BrowserRouter>
                    </section>
                </div>


                {/*Main Footer*/}
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-inline">
                        SOFTBOX
                    </div>
                    <strong>Copyright &copy; 2018 <a href="#">www.softbox.com.br</a>.</strong> Todos direitos
                    reservados.
                </footer>
            </div>
        )
    }
}