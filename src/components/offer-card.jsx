import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import offerProptypes from './offer-proptypes';

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this._onHover = this._onHover.bind(this);
  }

  _onHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    const {offer, i} = this.props;

    return <article className="cities__place-card place-card"
      onMouseEnter={this._onHover}
      onMouseLeave={this._onHover}>
      {offer.premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${i}`}>
          <img className="place-card__image" src={offer.pictures[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `calc(20% * ${offer.rate})`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${i}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>;
  }
}

OfferCard.propTypes = offerProptypes;

export default OfferCard;
