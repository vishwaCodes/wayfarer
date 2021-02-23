import React, { Component } from 'react';
import CitiesList from '../components/CitiesList';
import PostsList from '../components/PostsList'

class WayfarerContainer extends Component {
  render() {
    return (
      <div>
        <CitiesList />
        <PostsList />
      </div>
    );
  };
};

export default WayfarerContainer;