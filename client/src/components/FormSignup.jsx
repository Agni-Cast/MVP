import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSignup } from '../useSignup.js'

const FormSignup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <label>Username:</label>
      <input
      type="text"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      />
      <label>Password:</label>
      <input
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
      <button disabled={isLoading}>Signup</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default FormSignup;