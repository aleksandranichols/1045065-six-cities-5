import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import PropTypes from 'prop-types';

import {offers} from './mocks/offers.js';
import {RENTAL_OFFERS_TOTAL} from './mocks/constants.js';

ReactDOM.render(
    <App RENTAL_OFFERS_TOTAL={RENTAL_OFFERS_TOTAL}
      offers={offers} />,
    document.getElementById(`root`)
);

App.propTypes = {
  RENTAL_OFFERS_TOTAL: PropTypes.number.isRequired
};
