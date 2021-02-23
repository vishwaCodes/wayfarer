

const CityPage = (props) => {
  return(
    <h1>{props.city ? props.city.city : ""}</h1>
    // <h1>{props.city.city}</h1>
  );
}

export default CityPage;