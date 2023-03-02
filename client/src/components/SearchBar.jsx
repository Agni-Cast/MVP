import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuthContext } from '../useAuthContext.js'
import { useTripContext } from '../useTripContext.js'

const SearchBar = ({city, setCity, cityResult, setCityResult}) => {
  const { user } = useAuthContext();
  const { dispatch } = useTripContext();
  const [searchCity, setSearchCity] = useState('')

  const handleSubmit = async (event) => {
    if (!user) {
      return;
    }
    const response = await fetch(`/location/attractions?query=tourist_attraction%20in%20${searchCity}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();
    console.log('JSONEEEEEE',json)
    if (response.ok) {
      dispatch({type: 'SET TRIP', payload: json});
    }
  }

  return (
    <div>
      <input placeholder="Search for a city ..." value={searchCity} onChange={(event) => setSearchCity(event.target.value)} style={{height: '50px'}}/>
      <button onClick={handleSubmit}>Go!</button>
    </div>
  )
}

export default SearchBar;