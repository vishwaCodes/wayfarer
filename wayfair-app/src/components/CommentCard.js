
const CommentCard = (props) => {
  return (
    <div className='card'>
      <div className='row'>
        <div className="card-body">
          {/* <h4 className="card-title">{props.comment.title}</h4> */}
          <p className="card-text">{props.comment.body}</p>
        </div>
      </div>
    </div>
  );
}


export default CommentCard;
