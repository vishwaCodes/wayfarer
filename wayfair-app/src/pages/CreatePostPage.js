import React, { Component } from "react"

const URL = 'http://localhost:4000/api/posts';

class CreatePostPage extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
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
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.history.push('/posts');
      console.log(data);
    })
    .catch((err) => console.log(err))
  };

  render() {
    return (
      <div>
        <h1>Add A New Post</h1>

        <form onSubmit={this.handleSubmit} >
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} /><br />

            <textarea name="body" id="body" cols="30" rows="10" value={this.state.body} onChange={this.handleChange} placeholder="Write post..." />

          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

export default CreatePostPage;