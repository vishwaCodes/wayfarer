import React from 'react';
import CommentsList from '../components/CommentsList'
import NewCommentForm from '../components/NewCommentForm'

class ShowPostPage extends React.Component {

state = {
    title: '',
    body: '', 
    comments: []
}

  componentDidMount() {
    fetch(`http://localhost:4000/api/posts/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((jsonData) => this.setState(jsonData))
      .catch((err) => console.log(err));
  }

  handleChange = () => {
    fetch(`http://localhost:4000/api/posts/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          comments: json.comments
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.comments)
    return (
      <div id='wayfarerContainer'>
        <div>
          <h1>{this.state.title}</h1>
          <p>{this.state.body}</p>
          <div>
            <p>{this.state.comments.length} comments</p>
            <NewCommentForm update={this.handleChange} post={this.props.match.params.id}/>
          </div>
          <div className='container'>
            <CommentsList comments={this.state.comments}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPostPage;
