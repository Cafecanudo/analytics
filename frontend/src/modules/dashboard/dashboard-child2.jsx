import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addLinkBreadcrumbAction } from '../main/redux/actions';

class DashboardChild2 extends Component {

    componentDidMount() {
        this.props.addLinkBreadcrumbAction({
            link: '/awdawd', descricao: 'aaaaaaaaaaaaaaa'
        });
    }

    render() {
        console.log(this.props.match.params.name);
        return (
            <div className="container-fluid">
                filho2222
            </div>
        );
    }
}

const mapAction = dispatch => bindActionCreators({ addLinkBreadcrumbAction }, dispatch);
export default connect(null, mapAction)(DashboardChild2);
