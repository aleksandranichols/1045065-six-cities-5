import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from './main';
import Login from './login';
import Offer from './offer';
import Favorites from './favorites';

const App = (props) => {
  const {rentalOffers} = props;

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main rentalOffers = {rentalOffers} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/offer/:id?" exact>
        <Offer />
      </Route>
      <Route path="/favorites" exact>
        <Favorites />
      </Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  </BrowserRouter>
};

App.propTypes = {
  rentalOffers: PropTypes.number.isRequired
};

export default App;
