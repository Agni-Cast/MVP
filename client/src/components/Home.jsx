import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = ({city, setCity, cityResult, setCityResult}) => {

  return (
    <div>
      {cityResult.map((attraction) => {
        return (
          <div key={attraction.place_id}>{attraction.name}</div>
        )
      })}
    </div>
  )
}

export default Home;