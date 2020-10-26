import PropTypes from 'prop-types';

const reivewProptypes = () => {
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

export default reivewProptypes;
