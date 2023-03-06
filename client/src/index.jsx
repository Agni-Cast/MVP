import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './useAuthContext.js'
import { AuthContextProvider } from '../AuthContext.js'
import { TripContextProvider } from './TripContext'
import Navbar from './components/Navbar.jsx';
import FormLogin from './components/FormLogin.jsx';
import FormSignup from './components/FormSignup.jsx';
import MyTrips from './components/MyTrips.jsx'

const App = () => {
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
        <Route path="/my-trips" element={user ? <MyTrips/> : <Navigate to="/"/>} />
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
