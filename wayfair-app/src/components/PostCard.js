import {Link } from 'react-router-dom'


function PostCard(props) {



  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <Link to={`/edit-post/${props.post._id}`}>Edit</Link>
      <button onClick={() => props.deletePost(props.post._id)}>Delete</button>
    </div>
  );
};

export default PostCard;