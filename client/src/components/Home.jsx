import React, {useState, useEffect} from 'react';
import { useTripContext } from '../useTripContext.js'
import { useAuthContext } from '../useAuthContext.js'
import TripDetail from './TripDetail.jsx'
import SearchBar from './SearchBar.jsx'

const { token } = require('../../../config.js');

const Home = () => {
  const [searchCity, setSearchCity] = useState('Miami')
  const { trip, dispatch } = useTripContext();
  const { user } = useAuthContext();

  const fetchCity = async () => {
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

  useEffect(() => {
    if (user) {
      fetchCity()
    }
  }, [dispatch, user])

  return (
    <div>
      <div>
        <SearchBar searchCity={searchCity} setSearchCity={setSearchCity}/>
      </div>
      <div className="all-trip">

      {trip && trip.results.map(attraction => <TripDetail key={attraction.place_id} attraction={attraction} token={token} searchCity={searchCity} fetchCity={fetchCity}/>)}
      </div>
    </div>
  )
}

export default Home;
