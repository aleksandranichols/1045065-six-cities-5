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
  const {offers} = props;

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main offers={offers} Offers={Offers} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/offer/:id?" exact>
        {offers.map((offer, i) => (
          <Offer offer={offer} key={`offer-${i}`}/>
        ))}
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

App.propTypes = {offers: PropTypes.arrayOf(OfferProptypes)};

export default App;
