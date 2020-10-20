import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from './offer-card';
import OfferProptypes from './offer-proptypes';

class Offers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    const {offers} = this.props;

    return (offers.map((offer, i) =>
      <OfferCard
        offer={offer}
        key={`card-${i}`}
        handleHover={this.handleHover} />));
  }
}

Offers.propTypes = {offers: PropTypes.arrayOf(OfferProptypes)};

export default Offers;
