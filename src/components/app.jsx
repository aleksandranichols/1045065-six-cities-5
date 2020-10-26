import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from './main';
import Login from './login';
import Offer from './offer';
import Favorites from './favorites';
import offerProptypes from './offer-proptypes';

const App = (props) => {
  const {offers} = props;

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main offers={offers} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/offer/:id" exact render={(props) => {
          const offer = offers.find((offer) => offer.id ===  parseInt(props.match.params.id, 10));
          return <Offer offer={offer} />
        }
      } />
      <Route path="/favorites" exact>
        <Favorites offers={offers} />
      </Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {offers: PropTypes.arrayOf(offerProptypes)};

export default App;
