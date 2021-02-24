import {Link } from 'react-router-dom'


function PostCard(props) {



  return (
    <div>
      <Link to={`/show-post/${props.post._id}`}>{props.post.title}</Link>
      {/* <p>{props.post.body}</p> */}
      <Link to={`/edit-post/${props.post._id}`}><button className='btn-primary'>Edit</button></Link>
      <button className='btn-primary' onClick={() => props.deletePost(props.post._id)}>Delete</button>
    </div>
  );
};

export default PostCard;