import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const logoFavicon = props => (
    <Link to={'/'} className={'brand-link'}>
        <img src={props.config.favicon} className="brand-image"/>
        <span className="brand-text font-weight-light">{props.config.name}</span>
    </Link>
);

const mapProps = state => ({ config: state.applicationReducer.configuracao });
export default connect(mapProps)(logoFavicon);