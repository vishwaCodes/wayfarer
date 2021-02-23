import PostsList from './PostsList'

function CityCard(props) {
  return (
    <div>
      <h1>{props.city.city}</h1>
    </div>
  );
};

export default CityCard;