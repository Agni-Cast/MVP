import React, {useState, useEffect} from 'react';//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/SearchBar.jsx';
import MyTrips from './components/MyTrips.jsx';
import Home from './components/Home.jsx'
import HomePage from './components/HomePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from '../AuthContext.js'
import Navbar from './components/Navbar.jsx';
import FormLogin from './components/FormLogin.jsx';
import FormSignup from './components/FormSignup.jsx';

const App = () => {
  const [loginName, setLoginName] = useState('')

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
        <div className="pages">
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup-form" element={<FormSignup/>}/>
        <Route path="/login-form" element={<FormLogin/>}/>
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
    <App />
  </AuthContextProvider>
);
