import React, {useState, useEffect} from 'react';
import axios from 'axios';
const { token } = require('../../../config.js');
import SearchBar from './SearchBar.jsx'
import MyTrips from './MyTrips.jsx';
import { useTripContext } from '../useTripContext.js'
import { useAuthContext } from '../useAuthContext.js'
import TripDetail from './TripDetail.jsx'

const Home = ({loginName}) => {
  const [city, setCity] = useState('Miami')
  const [cityResult, setCityResult] = useState([])
  const [photo, setPhoto] = useState('')
  const [attractionName, setAttractionName] = useState('')
  const [added, setAdded] = useState({});
  const { trip, dispatch } = useTripContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch(`/location/attractions?query=tourist_attraction%20in%20${city}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET TRIP', payload: json});
      }
    }
    if (user) {
      fetchCity()
    }
  }, [dispatch, user])

  console.log("TRIP", trip)

  // const addAttraction = (input) => {
  //   const data = {
  //     city: city,
  //     attaction: input.name,
  //     photo: input.photos[0].photo_reference
  //   }
  //   // axios.post('add-attraction')
  // }
  // const addAttraction = (input) => {
  //   const attractionInfo = {
  //     user: loginName,
  //     city: city,
  //     attraction: input.name,
  //     photo: photo
  //   }
  //   setAdded([...attractionInfo])
  // }
  return (
    <div>
      <div>
        <MyTrips selectedAtt={added}/>
        <SearchBar city={city} setCity={setCity} cityResult={cityResult} setCityResult={setCityResult}/>
      </div>
      {trip && trip.results.map(attraction => <TripDetail key={attraction.place_id} attraction={attraction} token={token}/>)}
    </div>
  )
}

export default Home;