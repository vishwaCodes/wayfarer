import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WayfarerContainer from './containers/WayfarerContainer';


import './App.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/wayfarer' component={ WayfarerContainer } />
      </Switch>
    </div>
  );
}

export default App;
