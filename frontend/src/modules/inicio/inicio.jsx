import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { atualizarBreadcrumbAction } from '../main/redux/actions';

class Inicio extends Component {

    componentDidMount(){
        this.props.atualizarBreadcrumbAction({
            title: 'Inicio'
        });
    }

    componentWillMount() {
        this.props.history.replace('/dashboard/notas-internalizadas');
    }

    render() {
        return <div>inin</div>;
    }
}

const mapAction = dispatch => bindActionCreators({ atualizarBreadcrumbAction }, dispatch);
export default connect(null, mapAction)(Inicio);
