import React, {useState, useEffect} from 'react';
import axios from 'axios';
const { token } = require('../../../config.js');
import SearchBar from './SearchBar.jsx'
import MyTrips from './MyTrips.jsx';

const Home = ({loginName}) => {
  const [city, setCity] = useState('Miami')
  const [cityResult, setCityResult] = useState([])
  const [photo, setPhoto] = useState('')
  const [attractionName, setAttractionName] = useState('')

  console.log('Index - City: ', city)
  console.log('Index - City result: ', cityResult)

  console.log('login username: ', loginName)

  useEffect(() => {
    axios.get(`/location/attractions?query=tourist_attraction%20in%20${city}`)
    .then((response) => {
      setCityResult(response.data.results)
      // setPhoto(response.data.results.photos[0].photo_reference)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [city])

  // const addAttraction = (input) => {
  //   const data = {
  //     city: city,
  //     attaction: input.name,
  //     photo: input.photos[0].photo_reference
  //   }
  //   // axios.post('add-attraction')
  // }

  return (
    <div>
      <div>
        <MyTrips/>
        <SearchBar city={city} setCity={setCity} cityResult={cityResult} setCityResult={setCityResult}/>
      </div>
      {cityResult.map((attraction) => {
        return (
          <div>
          <div key={attraction.place_id} >{attraction.name}</div>
          {/* {console.log("CONSOLEEE 111", attraction)}
          {console.log("CONSOLEEE", attraction.photos)} */}
          {attraction.photos ?
          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${attraction.photos[0].photo_reference}&key=${token}`}></img> : ''
        }
          <button
          // onClick={() => {
          //   addAttraction(attraction);
          //   <MyTrips />
          //   }}
            >Add</button>
          </div>
        )
      })}
    </div>
  )
}

export default Home;