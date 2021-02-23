import PostLists from '../components/PostsList'

const CityPage = (props) => {
  return(
    <div>
      <h1>{props.city ? props.city.city : ""}</h1>
      {props.city ? <PostLists city={props.city}/> : ""}
    </div>
  );
}

export default CityPage;