import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainApplication from './modules/main/main';
import { appStore } from './config/store';
import NoFound from './modules/nofound/nofound';
import Login from './modules/login/login';
import Axios from 'axios/index';

Axios.interceptors.response.use((response) => {
    return response;
}, error => {
    return Promise.reject(error.response);
});

const app = () => (
    <HashRouter>
        <Provider store={appStore}>
            <Switch>
                <Route exact path="/" component={MainApplication}/>
                <Route exact path="/dashboard/:name" component={MainApplication}/>
                <Route exact path="/grafico/:name" component={MainApplication}/>
                <Route exact path="/login" component={Login}/>
                <Route component={NoFound}/>
            </Switch>
        </Provider>
    </HashRouter>
);
// hot(module)(app);
ReactDOM.render(app(), document.getElementById('app'));