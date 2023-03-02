import { useTripContext } from '../useTripContext.js';

const TripDetail = ({ attraction, token }) => {
  return (
    <div className='trip-details'>
      <h4>{attraction.name}</h4>
      {attraction.photos ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${attraction.photos[0].photo_reference}&key=${token}`}></img> : ''}
    </div>
  )
}

export default TripDetail;