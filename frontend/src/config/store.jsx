import { combineReducers, createStore } from 'redux';

import { headerMenuReducer } from '../components/header-menu/redux/reducers';
import { applicationReducer } from '../modules/main/redux/reducers';
import { sidebarReducer } from '../components/siderbar/redux/reducers';

//Lista de redux_
const reducers = {
    applicationReducer,
    headerMenuReducer,
    sidebarReducer
};

//Export
/** @namespace window.__REDUX_DEVTOOLS_EXTENSION__ */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const appStore = createStore(combineReducers(reducers), devTools);