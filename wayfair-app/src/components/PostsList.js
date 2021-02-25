import PostCard from './PostCard';

function PostsList(props) {
  return (
    props.city.posts.slice(0).reverse().map((post, i) => {
      return <PostCard key={post._id} post={post} deletePost={props.deletePost}/>
    })
  );
};

export default PostsList;