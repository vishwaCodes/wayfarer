import React, { Component } from 'react';
import CitiesList from '../components/CitiesList';
import PostsList from '../components/PostsList'

const URL = 'http://localhost:4000/api/cities'


class WayfarerContainer extends Component {
  state = {
    cities: []
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        cities: json
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <CitiesList cities={this.state.cities} />
        <PostsList />
      </div>
    );
  };
};

export default WayfarerContainer;