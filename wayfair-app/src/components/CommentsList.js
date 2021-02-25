import CommentCard from './CommentCard';

const CommentsList = (props) => {
  return (
    props.comments.map((comment, i) => {
      return <CommentCard key={comment._id} comment={comment}/>
    })
  )
}

export default CommentsList;