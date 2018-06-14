import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { atualizarBreadcrumb } from '../../main/redux/root.actions';

class Configuracao extends Component {

    componentDidMount() {
        this.props.atualizarBreadcrumb({
            title: 'Configuracao',
            link: [
                {
                    descricao: 'Geral'
                }
            ]
        });
    }

    render() {
        return (
            <div className="container-fluid">
                Configuracoes
            </div>
        );
    }
}

const dispatchPros = dispatch => bindActionCreators({
    atualizarBreadcrumb
}, dispatch);
export default connect(null, dispatchPros)(Configuracao);