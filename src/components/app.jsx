import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from './main';
import Login from './login';
import Offer from './offer';
import Offers from './offers';
import Favorites from './favorites';
import OfferProptypes from './offer-proptypes';

const App = (props) => {
  const {RENTAL_OFFERS_TOTAL, offers} = props;

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main RENTAL_OFFERS_TOTAL = {RENTAL_OFFERS_TOTAL}
          offers={offers}
          Offers={Offers} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/offer/:id?" exact>
        <Offer offers={offers} />
      </Route>
      <Route path="/favorites" exact>
        <Favorites offers={offers} />
      </Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  RENTAL_OFFERS_TOTAL: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(OfferProptypes)
};

export default App;
