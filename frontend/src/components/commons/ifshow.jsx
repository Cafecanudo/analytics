import React from 'react';

export const ShowComponent = props => {
    if (props.show) {
        return (
            <show-component>
                {props.children}
            </show-component>
        );
    } else {
        return null;
    }
};
