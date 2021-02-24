import React from 'react';

const URL = 'http://localhost:4000/api/posts';

class CreatePostPage extends React.Component {
  state = {
    title: '',
    author: '',
    body: '',
    city: 'San Francisco',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then((jsonData) => {
      console.log(jsonData);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' value={this.state.title} onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor='author'>author</label>
            <input type='text' id='author' name='author' value={this.state.author} onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor='body'>body</label>
            <textarea type='text' id='body' name='body' value={this.state.body} onChange={this.handleChange}></textarea>
          </div>
          <div>
            <label htmlFor='city'>city</label>
            <select id='city' name='city' onChange={this.handleChange}>
              <option value='San Francisco' >
                San Fransico
              </option>
              <option value='London' >
                London
              </option>
              <option value='New York' >
                New York
              </option>
              <option value='Seattle' >
                Seattle
              </option>
              <option value='Los Angles' >
                Los Angles
              </option>
            </select>
          </div>
          <button type='submit'>Create New Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePostPage;
