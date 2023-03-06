import React, {useEffect, useState} from 'react';
import { useTripContext } from '../useTripContext.js'
import { useAuthContext } from '../useAuthContext.js'
import axios from 'axios';
const { token } = require('../../../config.js');

const MyTrips = () => {
  const { user } = useAuthContext();
  const [myTrips, setMyTrips] = useState([])
  let final;

  const fetchMyTrip = () => {
    axios.get('/get-trips', {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }).then((response) => {
      setMyTrips(response.data);
    })
  }

  useEffect(() => {
    if (user) {
      fetchMyTrip()
    }
  }, [final])
  final = myTrips

  return (
    <div>
      My Trip Page
      {final.length !== 0 ? final.map((myTrip) => {
        return(
        <div className='trip-details'>
        <h4>{myTrip.city}</h4>
        <h4>{myTrip.attraction}</h4>
        <img alt={`${myTrip.attraction}`} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${myTrip.photo}&key=${token}`}></img>
      </div>
        )
      }) : <h1>You currently don't have any trips, please go to the home page to add some.</h1>}
    </div>
  )
}

export default MyTrips;
