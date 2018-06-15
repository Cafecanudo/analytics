import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import { atualizarBreadcrumbAction } from '../main/redux/actions';
import CharBar from '../../components/charts/chart.bar';
import DashboardChild from './dashboard-child';
import DashboardChild2 from './dashboard-child2';

class Dashboard extends Component {

    componentDidMount() {
        this.props.atualizarBreadcrumbAction({
            title: 'Dashboard'
        });
    }

    render() {
        console.log();
        return (
            <div className="container-fluid">
                <Link to={`/dashboard/${this.props.match.params.name}/child-char`}>AAAAAAAAAAAAAAAAAA</Link><br/>
                <Link to={`/dashboard/aaaa/vaca`}>ddd</Link>
                <CharBar/>
                    <Route to={`/dashboard/${this.props.match.params.name}/child-char`} component={DashboardChild}/>
                    {/*<Route to={`/dashboard/aaaa/vaca`} component={DashboardChild2}/>*/}
            </div>
        );
    }
}

const mapAction = dispatch => bindActionCreators({ atualizarBreadcrumbAction }, dispatch);
export default withRouter(connect(null, mapAction)(Dashboard));
