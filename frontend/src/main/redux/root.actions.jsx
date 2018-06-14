import { TYPE } from './type.actions';

export const atualizarBreadcrumb = breadcrumb => ({
    type: TYPE.app.UPDATE_BREADCRUMB,
    breadcrumb: breadcrumb
});