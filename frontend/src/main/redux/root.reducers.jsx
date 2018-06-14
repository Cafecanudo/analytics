import { TYPE } from './type.actions';

const STATE_INITIAL_BREADCRUMB = {
    app: {
        breadcrumb: {
            title: 'Dashboard',
            link: []
        }
    }
};

export const appBreadcrumb = (state = STATE_INITIAL_BREADCRUMB.app.breadcrumb, action) => {
    switch (action.type) {
        case TYPE.app.UPDATE_BREADCRUMB: {
            return action.breadcrumb;
        }
        default:
            return state;
    }
};
