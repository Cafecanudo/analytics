import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import MainApplication from './modules/main/main';
import { appStore } from './config/store';

const app = () => (
    <HashRouter>
        <Provider store={appStore}>
            <MainApplication/>
        </Provider>
    </HashRouter>
);
// hot(module)(app);
ReactDOM.render(app(), document.getElementById('app'));