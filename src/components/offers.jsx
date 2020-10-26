import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from './offer-card';
import offerProptypes from './offer-proptypes';

const Offers = (props) => {
  const {offers} = props;

  return offers.map((offer, i) => {
    return <OfferCard
      offer={offer}
      key={`card-${i}`}
      i={i} />;
  });
};

Offers.propTypes = {offers: PropTypes.arrayOf(offerProptypes)};

export default Offers;
