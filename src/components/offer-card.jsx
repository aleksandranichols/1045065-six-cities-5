import React from 'react';
import {Link} from 'react-router-dom';

import OfferProptypes from './offer-proptypes';

const OfferCard = (props) => {
  const {offer, handleHover} = props;

  return <article className="cities__place-card place-card"
    onMouseEnter={handleHover}
    onMouseLeave={handleHover}>
    {offer.premium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.pictures[0]} width="260" height="200" alt="Place image" />
      </a>
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
        <Link to="/offer/1">{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = OfferProptypes;

export default OfferCard;
