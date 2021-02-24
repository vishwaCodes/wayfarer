import PostLists from '../components/PostsList'
import CreatePostPage from '../pages/CreatePostPage';

const CityPage = (props) => {
  return(
    <div>
      <h1>{props.city ? props.city.city : ""}</h1>
      {props.city ? <PostLists deletePost={props.deletePost} city={props.city}/> : ""}

      {/* <button onClick={CreatePostPage}><h1>+</h1></button> */}
      <CreatePostPage city={props.city} />
    </div>
  );
}

export default CityPage;