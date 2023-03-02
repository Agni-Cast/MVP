import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLogin } from '../useLogin.js';

const FormLogin = ({show, onClose, closeModal, loginName, setLoginName}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading } = useLogin();
  // const [userExist, setUserExist] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setUsername('');
  //   setPassword('');
  // }

  // const login = () => {
  //   const data = {
  //     name: username,
  //     password: password
  //   };
  //   axios.post('/api/user/login', data)
  //   .then((response) => {
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     setUserExist(!false);
  //     console.log("NOT ABLE TO login", error);
  //   })
  // }

  // // const hangleOnChange = (e) => {
  // //   setUsername(e.target.value);
  // //   setLoginName(e.target.value)
  // // }

  // return (
  //   <form onSubmit={(e) => handleSubmit(e)}>
  //     <h4>login</h4>
  //     <br/>
  //     <label>
  //       Username:
  //       <br/>
  //       <input value={username} onChange={(e) => {
  //     setUsername(e.target.value);
  //     setLoginName(e.target.value)
  //   }}/>
  //     </label>
  //     <br/>
  //     <label>
  //       Password:
  //       <br/>
  //       <input value={password} onChange={(e) => {
  //       setPassword(e.target.value)}}
  //     />
  //     </label>
  //     <br/>
  //     <button onClick={login}><Link to="/home">Submit</Link></button>
  //   </form>
  // )

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
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
      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default FormLogin;