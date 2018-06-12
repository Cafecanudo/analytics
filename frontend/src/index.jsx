import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/app';
import { appRedux } from './main/app.redux';

const redures = combineReducers({
    breadcrumb: appRedux
});

const app = () => <HashRouter><Provider store={createStore(redures)}><App/></Provider></HashRouter>;
hot(module)(<App/>);
ReactDOM.render(app(), document.getElementById('app'));