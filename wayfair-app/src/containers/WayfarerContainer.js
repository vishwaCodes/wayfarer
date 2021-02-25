import React, { Component } from 'react';
import CitiesList from '../components/CitiesList';
import CityPage from '../pages/CityPage';
// import PostsList from '../components/PostsList'

const URL = 'http://localhost:4000/api/cities';

class WayfarerContainer extends Component {
  state = {
    cities: [],
    city: 0,
  };

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cities: json,
        });
      })
      .catch((err) => console.log(err));
  }

  updateCity = (index) => {
    this.setState({
      city: index,
    });
  };

  handleChange = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cities: json,
        });
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    fetch(`http://localhost:4000/api/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => console.log(response))
      .then((jsonData) => {
        console.log(jsonData);
        this.handleChange();
      });
  };

  render() {
    return (
      <>
      <div className='container wayfarerContainer' >
        <div className='row' id='wayfarerContainer'>
          <div id='wayfarerLeft' className='col-4'>
      <h2>Cities</h2>
            <CitiesList
              cities={this.state.cities}
              updateCity={this.updateCity}
            />
          </div>
          <div id='wayfarerRight' className='col-8'>
            <CityPage
              city={this.state.cities[this.state.city]}
              deletePost={this.handleDelete}
              update={this.handleChange}
            />
          </div>
        </div>
      </div>
      <br />
      </>
    );
  }
}

export default WayfarerContainer;
