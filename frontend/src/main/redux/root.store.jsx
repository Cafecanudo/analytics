import { combineReducers, createStore } from 'redux';
//local
import { usuarioReducer } from '../../components/templates/usuario/reducers';
import { appBreadcrumb } from './root.reducers';
import { headerMenuReducer } from '../../components/templates/top-menu/__redux';

const store = combineReducers({
    usuario: usuarioReducer,
    breadcrumb: appBreadcrumb,
    headermenu: headerMenuReducer
});
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const rootStore = createStore(store, devTools);
