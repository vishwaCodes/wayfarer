import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import WayfarerContainer from '../containers/WayfarerContainer';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CreatePostPage from '../pages/CreatePostPage'
import EditPost from '../pages/EditPost'

export default (
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route path='/wayfarer' component={ WayfarerContainer } />
    <Route path='/login' component={ LoginPage } />
    <Route path='/signup' component={ SignupPage } />
    <Route path='/create' component={ CreatePostPage } />
    <Route path='/edit-post/:id' component={EditPost} />
  </Switch>
);