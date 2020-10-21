import PropTypes from 'prop-types';

const ReviewProptypes = () => {
  return {
    review: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      rate: PropTypes.number,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  };
};

export default ReviewProptypes;
