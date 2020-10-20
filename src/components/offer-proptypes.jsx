import PropTypes from 'prop-types';

const OfferProptypes = () => {
  return {
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
      amenties: PropTypes.arrayOf(PropTypes.string),
    }),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }),
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          rate: PropTypes.number,
          text: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired
        })
    )
  };
};

export default OfferProptypes;
