import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer className="main-footer">
                <div className="float-right d-none d-sm-inline name-empresa">
                    MAGAZINE LUIZA
                </div>
                <span>Copyright &copy; 2018 <a href="#">www.softbox.com.br</a>.</span> Todos direitos reservados.
            </footer>
        );
    }
}
