import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import PropTypes from 'prop-types';

import {offers} from './mocks/offers.js';
import OfferProptypes from './components/offer-proptypes';

ReactDOM.render(
    <App offers={offers} />,
    document.getElementById(`root`)
);

App.propTypes = {offers: PropTypes.arrayOf(OfferProptypes)};
