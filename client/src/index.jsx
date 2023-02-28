import React, {useState, useEffect} from 'react';// import ReactDOM from 'react-dom';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/SearchBar.jsx';
import Login from './components/Login.jsx';
import MyTrips from './components/MyTrips.jsx';
import Home from './components/Home.jsx'


const App = () => {
  const [city, setCity] = useState('Miami')
  const [cityResult, setCityResult] = useState([])

  console.log('Index - City: ', city)
  console.log('Index - City result: ', cityResult)

  useEffect(() => {
    axios.get(`/location/attractions?query=tourist_attraction%20in%20${city}`)
    .then((response) => {
      setCityResult(response.data.results)
    })
    .catch((error) => {
    })
  }, [city])

  return (
    <div>
      <h1>Vacations Bucketlist</h1>
      <Login/>
      <SearchBar city={city} setCity={setCity} cityResult={cityResult} setCityResult={setCityResult}/>
      <Home city={city} setCity={setCity} cityResult={cityResult} setCityResult={setCityResult}/>
      <h2>My trips</h2>
      <MyTrips/>

    </div>
  )
}
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);

//ReactDOM.render(<App />, document.getElementById('app'));