import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './main/app';
import { rootStore } from './main/redux/root.store';

const app = () => <HashRouter><Provider store={rootStore}><App/></Provider></HashRouter>;
// hot(module)(<App/>);
ReactDOM.render(app(), document.getElementById('app'));