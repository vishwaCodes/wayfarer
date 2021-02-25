import {Link } from 'react-router-dom';
import React, {useState} from 'react';



function PostCard(props) {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <div className={`modalBackground modalShowing-${modalState}`}>
      <Link to={`/show-post/${props.post._id}`}>{props.post.title}</Link>
      {/* <p>{props.post.body}</p> */}
      <Link to={`/edit-post/${props.post._id}`}><button className='btn-primary'>Edit</button></Link>
      
      <button className='btn-primary' onClick={() => toggleModalState()}>Delete</button>
    </div>
    
  );
};

export default PostCard;