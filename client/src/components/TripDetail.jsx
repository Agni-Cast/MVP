import { useTripContext } from '../useTripContext.js';
import { useAuthContext } from '../useAuthContext.js';


const TripDetail = ({ attraction, token, searchCity, fetchCity}) => {
  const { dispatch } = useTripContext()
  const { user } = useAuthContext()

  const handleClick = async (e, obj) => {
    e.preventDefault()
    if (!user) {
      throw Error('You must be logged in')
    }

    const trip = {
      city: searchCity,
      attraction: obj.name,
      photo: obj.photos[0].photo_reference
    }
    const response = await fetch('/save-trip', {
      method: 'POST',
      body: JSON.stringify(trip),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if (!response.ok) {
      throw Error('ERROR');
    }
    if(response.ok) {
      dispatch({type: 'CREATE_TRIP', payload: json})
      fetchCity()
   }
  }

  return (
    <form>
    <div className='trip-details'>
      <h4>{attraction.name}</h4>
      {attraction.photos ? <img style={{height:'300px', width:'400px'}} alt={`${attraction.name}`} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${attraction.photos[0].photo_reference}&key=${token}`}></img> : ''}
      <button onClick={async (e) => {
        handleClick(e, attraction)
      }}>Add Trip</button>
    </div>
    </form>
  )
}

export default TripDetail;
