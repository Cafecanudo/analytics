import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import '../../@core/dependencies';
import Sidebar from '../../components/siderbar/siderbar';
import HeaderMenu from '../../components/header-menu/header.menu';
import Inicio from '../inicio/inicio';
import DashboardMagazine from '../magazine/dashboard.magazine';
import GraficoNFSE from '../magazine/graficos/grafico.nfse';
import GraficoNFE from '../magazine/graficos/grafico.nfe';
import GraficoCTE from '../magazine/graficos/grafico.cte';

class MainApplication extends Component {

    obterLinkBreadcrumb() {
        return (this.props.breadcrumb.link || []).map((el, index) => (
            <li key={index} className="breadcrumb-item">
                {(index + 1) !== (this.props.breadcrumb.link || []).length ? (
                    <Link to={el.url}>
                        {el.descricao}
                    </Link>
                ) : el.descricao}
            </li>
        ));
    }


    componentDidMount() {
        if (!this.props.loginUsuario || !this.props.loginUsuario.dadosUsuario) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <main-application>
                <div className="wrapper">
                    <HeaderMenu/>
                    <Sidebar/>
                    <div className="content-wrapper">

                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0 text-dark">{this.props.breadcrumb.title}</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            {this.obterLinkBreadcrumb()}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Troca de rotas acontece aqui*/}
                        <section className="content">
                            <Switch>
                                <Route exact path="/inicio" component={Inicio}/>
                                <Route path="/dashboard/:name" component={DashboardMagazine}/>
                                <Route exact path="/grafico/notas-nfs-e" component={GraficoNFSE}/>
                                <Route exact path="/grafico/notas-nf-e" component={GraficoNFE}/>
                                <Route exact path="/grafico/notas-ct-e" component={GraficoCTE}/>
                            </Switch>
                        </section>
                    </div>
                </div>
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-inline">
                        SOFTBOX
                    </div>
                    <span>Copyright &copy; 2018 <a href="#">www.softbox.com.br</a>.</span> Todos direitos reservados.
                </footer>
            </main-application>
        );
    }
}

const mapStateProps = state => ({
    loginUsuario: state.applicationReducer.loginUsuario,
    breadcrumb: state.applicationReducer.application.breadcrumb
});
export default withRouter(connect(mapStateProps)(MainApplication));