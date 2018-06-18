import React, { Component } from 'react';
import Axios from 'axios/index';
import { Link, withRouter } from 'react-router-dom';

import { env } from '../../config/config';
import { ShowComponent } from '../../components/commons/ifshow';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { atualizarLoginUsuarioAction } from '../main/redux/actions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            email: '',
            senha: ''
        };
    }

    sendUsuario() {
        Axios.post(`${env.server.url}/v1/usuario/login`, { email: this.state.email, senha: this.state.senha }).then(value => {
            if (value.status === 200) {
                this.props.atualizarLoginUsuarioAction(value.data);
                this.props.history.replace('/');
            } else {
                this.setState({
                    message: ''
                });
            }
        });
    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/"><b>ELDOC</b>Analytics</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Entre para iniciar sua sess&atilde;o</p>

                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="E-mail" onChange={(e) => {
                                this.setState({
                                    ...this.state,
                                    email: e.target.value
                                });
                            }}/>
                            <span className="fa fa-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Senha" onChange={(e) => {
                                this.setState({
                                    ...this.state,
                                    senha: e.target.value
                                });
                            }}/>
                            <span className="fa fa-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox"/> Lembrar Senha
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={() => this.sendUsuario()}>Entrar</button>
                            </div>
                        </div>

                        <p className="mb-1">
                            <a href="#">Esqueci minha senha</a>
                        </p>
                    </div>
                </div>
                <ShowComponent show={this.state.message}>
                    <div className="message" style={{ textAlign: 'center', color: 'red' }}>
                        <i className="fa fa-exclamation-triangle"></i> {this.state.message}
                    </div>
                </ShowComponent>
            </div>
        );
    }
}

const mapAction = dispatch => bindActionCreators({ atualizarLoginUsuarioAction }, dispatch);
const mapProps = state => ({ loginUsuario: state.applicationReducer.loginUsuario });
export default withRouter(connect(mapProps, mapAction)(Login));