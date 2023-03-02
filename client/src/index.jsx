import React, {useState, useEffect} from 'react';//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/SearchBar.jsx';
import MyTrips from './components/MyTrips.jsx';
import Home from './components/Home.jsx'
import HomePage from './components/HomePage.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './useAuthContext.js'
import { AuthContextProvider } from '../AuthContext.js'
import { TripContextProvider } from './TripContext'
import Navbar from './components/Navbar.jsx';
import FormLogin from './components/FormLogin.jsx';
import FormSignup from './components/FormSignup.jsx';

const App = () => {
  const [loginName, setLoginName] = useState('')
  const { user } = useAuthContext();

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
        <div className="pages">
        <Routes>
        <Route path="/" element={user ? <Home/> : <Navigate to="login-form"/>}/>
        <Route path="/signup-form" element={!user ? <FormSignup/> : <Navigate to="/"/>}/>
        <Route path="/login-form" element={!user ? <FormLogin/> : <Navigate to="/"/>} />
        </Routes>
        </div>
    </BrowserRouter>
    </div>
  )
}
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(
  <AuthContextProvider>
    <TripContextProvider>
    <App />
    </TripContextProvider>
  </AuthContextProvider>
);
