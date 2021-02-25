import {Link } from 'react-router-dom';
import React, {useState} from 'react';



function PostCard(props) {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <div>
      <Link to={`/show-post/${props.post._id}`}>{props.post.title}</Link>
      {/* <p>{props.post.body}</p> */}
      <Link to={`/edit-post/${props.post._id}`}><button className='btn-primary'>Edit</button></Link>
      <div className={`modalBackground modalShowing-${modalState}`}>
      <div id="deleteMsg">
        <p>Are you sure you want to delete this post?</p>
        <button onClick={() => props.deletePost(props.post._id)}>Yes</button>
        <button>No</button>
        <button id="exitBtn"  onClick={() => toggleModalState()}>
        Exit
        </button>
      </div> 
      </div>
      <button onClick={() => toggleModalState()} >Delete</button>
    </div>
    
  );
};

export default PostCard;