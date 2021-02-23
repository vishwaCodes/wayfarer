import CityCard from './CityCard';


function CitiesList(props) {
  console.log(props)
  return (
    
    props.cities.map((city) => {
      return <CityCard key={city.id} city={city} />
    })
    
  )
};

export default CitiesList;