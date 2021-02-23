import CityCard from './CityCard';


function CitiesList(props) {
  console.log(props)
  return (
    
    props.cities.map((city) => {
      return <CityCard city={city} />
    })
    
  )
};

export default CitiesList;