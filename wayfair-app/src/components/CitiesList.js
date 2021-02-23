import CityCard from './CityCard';
import {Link} from 'react-router-dom'


function CitiesList(props) {
  console.log(props)
  return (
    
    props.cities.map((city, i) => {
      return <CityCard key={city.id} city={city} index={i} updateCity={props.updateCity}/>
    })
    
  )
};

export default CitiesList;

// <Link to={`/wayfarer/${i+1}`}>