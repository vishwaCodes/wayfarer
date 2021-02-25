import {Link } from 'react-router-dom';
import React, {useState} from 'react';



function PostCard(props) {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <div>
      <div className='card post-card'>
        <div className='row' id="post-div">
          <div class="post-div">
            <Link className="post-link" to={`/show-post/${props.post._id}`}>{props.post.title}</Link>
          </div>
          <div class="btn-div">
            <Link to={`/edit-post/${props.post._id}`}><button className='btn btn-warning post-btns'>Edit</button></Link>
            <button className='btn btn-warning post-btns'onClick={() => toggleModalState()} >Delete</button> 
            <div className={`modalBackground modalShowing-${modalState}`}>
        <div id="deleteMsg">
          <p>Are you sure you want to delete this post?</p>
          <button onClick={() => props.deletePost(props.post._id)}>Yes</button>
          <button onClick={() => toggleModalState()}>No</button>
        </div> 
      </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PostCard;

