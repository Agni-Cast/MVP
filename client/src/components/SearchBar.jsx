import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = ({city, setCity, cityResult, setCityResult}) => {
  const [searchCity, setSearchCity] = useState('')

  const handleSubmit = (event) => {
    // console.log(searchCity)
    axios.get(`/location/attractions?query=tourist_attraction%20in%20}${searchCity}`)
    .then((response) => {
      setCityResult(response.data.results)
      // console.log('inside Search', cityResult)
    })
    .catch((error) => {
    })
  }

  return (
    <div>
      <input placeholder="Search for a city ..." value={searchCity} onChange={(event) => setSearchCity(event.target.value)} style={{height: '50px'}}/>
      <button onClick={handleSubmit}>Go!</button>
    </div>
  )
}

export default SearchBar;