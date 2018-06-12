const inital_state = {
    title: 'Dashxxboard',
    link: []
};

export const appRedux = (state = inital_state, action) => {
    switch (action.type) {
        case 'NEW_BREADCRUMB': {
            return action.breadcrumb;
        }
        default:
            return state;
    }
};
