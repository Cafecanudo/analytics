import Axios from 'axios';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { env } from '../../config/config';
import { atualizarUsuarioAction } from './redux/actions';

class DadosUsuario extends Component {

    obterDadosUsuario() {
        Axios.get(`${env.server.url}/v1/usuario/perfil`).then(value => {
            this.props.atualizarUsuarioAction({
                usuario: value.data
            });
        });
    }

    componentDidMount() {
        setTimeout(() => this.obterDadosUsuario(), 100);
    }

    render() {
        return (
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <NavLink className={'d-block'} to={'/perfil'} activeClassName="active-sub">
                    <div className="image">
                        <img src={this.props.usuario.foto} className="img-circle elevation-2"
                             alt="User Image"/>
                    </div>
                    <div className="info">
                        {this.props.usuario.dadosUsuario.nome || 'Carregando...'}
                    </div>
                </NavLink>
            </div>
        );
    }
}

const mapProps = state => ({ usuario: state.sidebarReducer.usuario });
const mapAction = dispatch => bindActionCreators({ atualizarUsuarioAction }, dispatch);
export default connect(mapProps, mapAction)(DadosUsuario);