import React from 'react';
import Main from './main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {rentalOffers} = props;

  return <Main rentalOffers={rentalOffers} />;
};

App.propTypes = {
  rentalOffers: PropTypes.number.isRequired
};

export default App;
