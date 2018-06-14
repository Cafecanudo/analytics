import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import noUserFoto from '../../../resources/images/no-user-photo.png';

class DadosUsuario extends Component {

    render() {
        return (
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <NavLink className={'d-block'} to={'/perfil'} activeClassName="active-sub">
                    <div className="image">
                        <img src={this.props.usuario.foto || noUserFoto} className="img-circle elevation-2"
                             alt="User Image"/>
                    </div>
                    <div className="info">
                        {this.props.usuario.dadosUsuario ? this.props.usuario.dadosUsuario.nome : 'Carregando...'}
                    </div>
                </NavLink>
            </div>
        );
    }
}

const stateProps = state => ({ usuario: state.usuario });
export default connect(stateProps)(DadosUsuario);
