import PostCard from './PostCard';

function PostsList(props) {
  return (
    props.city.posts.map((post, i) => {
      return <PostCard key={post._id} post={post}/>
    })
  );
};

export default PostsList;