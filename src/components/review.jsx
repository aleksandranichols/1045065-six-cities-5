import React from 'react';

import reivewProptypes from './review-proptypes';

const Review = (props) => {
  const {review} = props;

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {review.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `calc(20% * ${review.rate})`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.text}
      </p>
      <time className="reviews__time" dateTime={review.date}>{review.time}</time>
    </div>
  </li>;
};

Review.propTypes = reivewProptypes;

export default Review;
