import PostLists from '../components/PostsList';
import CreatePostPage from '../pages/CreatePostPage';

const CityPage = (props) => {
  return (
    <div>
      <div className='card'>
        <div>
          <img
            className='card-img-top'
            src={props.city ? props.city.img : ''}
          />
        </div>
        <div className='card-body'>
          <h1 className='card-title'>{props.city ? props.city.city : ''}</h1>
        </div>
      </div>
      <br />
      <div className='container'>
        <div className='card'>
          {props.city ? (
            <PostLists deletePost={props.deletePost} city={props.city} />
          ) : (
            ''
          )}
        </div>
      </div>
      <br />

      <hr />
      {/* <button onClick={CreatePostPage}><h1>+</h1></button> */}
      <CreatePostPage update={props.update} city={props.city} />
    </div>
  );
};

export default CityPage;
