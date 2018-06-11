import React, {Component} from 'react'
import noUserFoto from '../../resources/images/no-user-photo.png'

export default class DadosUsuario extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src={this.props.usuario.foto || noUserFoto} className="img-circle elevation-2" alt="User Image"/>
                </div>
                <div className="info">
                    <a href="#/perfil" className="d-block">{this.props.usuario.dadosUsuario ? this.props.usuario.dadosUsuario.nome : 'Carregando...'}</a>
                </div>
            </div>
        );
    }
}
