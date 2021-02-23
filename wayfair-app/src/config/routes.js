import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import WayfarerContainer from '../containers/WayfarerContainer';

export default (
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route path='/wayfarer' component={ WayfarerContainer } />
  </Switch>
);