import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import PropTypes from 'prop-types';

const rentalOffers = 312;

ReactDOM.render(
    <App rentalOffers={rentalOffers} />,
    document.getElementById(`root`)
);

App.propTypes = {
  rentalOffers: PropTypes.number.isRequired
};
