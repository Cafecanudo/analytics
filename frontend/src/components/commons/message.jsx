import React from 'react';

/**
 * tipo(success, warning, danger, info), Title, text, footer(Texto no rodape)
 * closable = se pode fechar alerta
 * @param props
 * @returns {*}
 * @constructor
 */
export const Message = props => {
    if ((props.show || false)) {
        return (
            <div className={`alert alert-dismissible alert-${props.tipo || 'info'}`} role="alert">
                {props.close ?
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button> : ''}
                {props.title ? <h4 className="alert-heading">{props.title}</h4> : ''}
                <p>{props.message || 'Sem mensagem'}</p>
                {props.footer ? <span><hr/><p className="mb-0">{props.footer}</p></span> : ''}
            </div>
        );
    } else {
        return null;
    }
};
