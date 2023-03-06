import React from 'react';
import { useAuthContext } from '../useAuthContext.js'
import { useTripContext } from '../useTripContext.js'

const SearchBar = ({searchCity, setSearchCity}) => {
  const { user } = useAuthContext();
  const { dispatch } = useTripContext();

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
    if (response.ok) {
      dispatch({type: 'SET TRIP', payload: json});
    }
  }

  return (
    <div>
      <input placeholder="Search for a city ..." value={searchCity} onChange={(event) => setSearchCity(event.target.value)
      } style={{height: '50px'}}/>
      <button onClick={handleSubmit}>Go!</button>
    </div>
  )
}

export default SearchBar;
