import { Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import '../@core/dependencies';
import Sidebar from '../components/sidebar/Sidebar';
import HeaderMenu from '../components/HeaderMenu';
import { ApiRouter } from './routers';

class AppComponent extends Component {

    obterLinkBreadcrumb() {
        return this.props.breadcrumb.link.map((component, index) => (
            <li key={index} className="breadcrumb-item">
                {(index + 1) !== this.props.breadcrumb.link.length ? (
                    <Link to={component.url}>
                        {component.descricao}
                    </Link>
                ) : component.descricao}
            </li>
        ));
    }

    render() {
        return (
            <span>
                <div className="wrapper">
                    <HeaderMenu/>
                    <Sidebar/>

                    {/*Content Wrapper. Contains page content*/}
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
                        <section className="content">
                            <Switch>
                                {ApiRouter().map((el, index) => (
                                    <Route key={index} exact={el.exact || true} path={el.path}
                                           component={el.component}/>
                                ))}
                            </Switch>
                        </section>
                    </div>

                </div>
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-inline">
                        SOFTBOX
                    </div>
                    <span>Copyright &copy; 2018 <a href="#">www.softbox.com.br</a>.</span> Todos direitos
                    reservados.
                </footer>
            </span>
        );
    }
}

const stateProps = (state) => ({
    breadcrumb: state.breadcrumb
});

export default withRouter(connect(stateProps)(AppComponent));
