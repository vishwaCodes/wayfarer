function PostCard(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default PostCard;