import React, { Component } from 'react';
import Landing from '../layout/Landing';
import Register from '../auth/Register';
import Login from '../auth/Login';
import { Route, Switch } from 'react-router-dom';
import Header from '../layout/Header';

class PublicRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Header />
      </Switch>
    );
  }
}

export default PublicRoutes;
