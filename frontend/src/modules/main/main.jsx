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
import Footer from '../../components/footer/Footer';

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
                        {this.props.breadcrumb.title ?
                            <div className="content-header app-breadcrumb">
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
                            : <div className="breadcrumb-out"></div> }

                        {/*Troca de rotas acontece aqui*/}
                        <section className="content">
                            <Switch>
                                <Route exact path="/" component={Inicio}/>
                                <Route path="/dashboard/:name" component={DashboardMagazine}/>
                                <Route path="/grafico/notas-nfs-e" component={GraficoNFSE}/>
                                <Route path="/grafico/notas-nf-e" component={GraficoNFE}/>
                                <Route path="/grafico/notas-ct-e" component={GraficoCTE}/>
                            </Switch>
                        </section>
                    </div>
                </div>
                <Footer/>
            </main-application>
        );
    }
}

const mapStateProps = state => ({
    loginUsuario: state.applicationReducer.loginUsuario,
    breadcrumb: state.applicationReducer.application.breadcrumb
});
export default withRouter(connect(mapStateProps)(MainApplication));