import React, { Component } from 'react';
import CitiesList from '../components/CitiesList';
import CityPage from '../pages/CityPage';
// import PostsList from '../components/PostsList'

const URL = 'http://localhost:4000/api/cities'


class WayfarerContainer extends Component {
  state = {
    cities: [],
    city: 0
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

  updateCity = (index) => {
    this.setState({
      city: index
    })
  }

  render() {
    return (
      <div>
        <CitiesList cities={this.state.cities} updateCity={this.updateCity}/>
        <hr/>
        <CityPage city={this.state.cities[this.state.city]}/>
      </div>
    );
  };
};

export default WayfarerContainer;