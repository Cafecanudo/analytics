import React from 'react';

import favicon from '../../resources/images/favicon.png';
import { Link } from 'react-router-dom';

export default () => (
    <Link to={'/'} className={'brand-link'}>
        <img src={favicon} className="brand-image"/>
        <span className="brand-text font-weight-light">ELDOC Analytcs</span>
    </Link>
)