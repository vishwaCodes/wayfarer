import { Link } from 'react-router-dom';

function PostCard(props) {
  return (
    <div>
      <div classNam='card'>
        <div className='row'>
          <div className='col-5'>
            <Link to={`/show-post/${props.post._id}`}>{props.post.title}</Link>
            {/* <p>{props.post.body}</p> */}
          </div>
          <div className='col-7'>
            <Link to={`/edit-post/${props.post._id}`}>
              <button className='btn btn-warning'>Edit</button>{' '}
            </Link>
            <button
              className='btn btn-danger'
              onClick={() => props.deletePost(props.post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
    
  );
}

export default PostCard;
