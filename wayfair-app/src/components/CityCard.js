import PostsList from './PostsList'

function CityCard(props) {

  function handleClick() {
    props.updateCity(props.index);
  }


  return (
    <div>
      <h1 onClick={handleClick}>{props.city.city}</h1>
    </div>
  );
};

export default CityCard;