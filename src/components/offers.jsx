import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from './offer-card';
import offerProptypes from './offer-proptypes';

class Offers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    const {offers} = this.props;

    return (offers.map((offer, i) =>
      <OfferCard
        offer={offer}
        key={`card-${i}`}
        i={i}
        onHover={this.onHover} />));
  }
}

Offers.propTypes = {offers: PropTypes.arrayOf(offerProptypes)};

export default Offers;
