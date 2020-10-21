import PropTypes from 'prop-types';

import ReviewProptypes from './review-proptypes';

const OfferProptypes = () => {
  return {
    i: PropTypes.number.isRequired,
    handleHover: PropTypes.func.isRequired,
    offer: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      bedroom: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      premium: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
      rate: PropTypes.number,
      pictures: PropTypes.arrayOf(PropTypes.string),
      amenities: PropTypes.arrayOf(PropTypes.string),
    }),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }),
    reviews: PropTypes.arrayOf(ReviewProptypes)
  };
};

export default OfferProptypes;
