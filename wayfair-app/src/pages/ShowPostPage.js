import React from 'react';

class ShowPostPage extends React.Component {

state = {
    title: '',
    body: ''
}

  componentDidMount() {
    fetch(`http://localhost:4000/api/posts/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((jsonData) => this.setState(jsonData))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div id='wayfarerContainer'>
        <div>
          <h1>{this.state.title}</h1>
          <p>{this.state.body}</p>
        </div>
      </div>
    );
  }
}

export default ShowPostPage;
