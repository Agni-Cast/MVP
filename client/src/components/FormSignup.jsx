import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSignup } from '../useSignup.js'

const FormSignup = ({show, onClose, closeModal, loginName, setLoginName}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();
  // const [userExist, setUserExist] = useState(false);
  // const [response, setResponse] = useState(true);


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     name: username,
  //     password: password
  //   };
  //   axios.post('/api/user/signup', data)
  //   .then((response) => {
  //     console.log(response.status)
  //     if (response.status !== 200) {
  //       setResponse(true)
  //     }

  //     // setUserExist(true);
  //   })
  //   .catch((error) => {
  //     // setUserExist(!false);
  //     console.log("NOT ABLE TO SIGNUP", error);
  //   })
  //   setUsername('');
  //   setPassword('');
  //   // axios.post('api/user/signup', data)
  //   //   .then(
  //   //     (response) => {
  //   //       console.log("RESPONSEEE", response)
  //   //     setTimeout(() => {
  //   //       closeModal();
  //   //     }, 1000);
  //   //   })
  //   //   .catch ((error) => {
  //   //     console.log(error);
  //   //   }
  //   //   )
  // }
  // // const signup = () => {
  // //   // const data = {
  // //   //   name: username,
  // //   //   password: password
  // //   // };
  // //   axios.post('/api/user/signup', data)
  // //   .then((response) => {
  // //     setResponse(response);
  // //   })
  // //   .catch((error) => {
  // //     // setUserExist(!false);
  // //     console.log("NOT ABLE TO SIGNUP", error);
  // //   })
  // // }
  // console.log(response)


  // return (
  //   <form onSubmit={(e) => handleSubmit(e)}>
  //     <h4>SignUp</h4>
  //     <br/>
  //     <label>
  //       Username:
  //       <br/>
  //       <input value={username} onChange={(e => setUsername(e.target.value))}/>
  //     </label>
  //     <br/>
  //     <label>
  //       Password:
  //       <br/>
  //       <input value={password} onChange={(e => setPassword(e.target.value))}/>
  //     </label>
  //     <br/>
  //     {/* {userExist ? <Link to="/form-login"> Already have an account?</Link> : } */}
  //     <button onClick={(e) => handleSubmit(e)}>
  //       Submit
  //     </button>
  //     <div>
  //     {response === true ? <Link to="/signup-form"></Link> : <Link to="/home"></Link>}
  //     </div>
  //   </form>
  //   // <div>
  //   //   {/* {userExist ?
  //   //     <>
  //   //     <p>Congratulation you successfully created an account
  //   //     </p> </> : <Link to="/login-form"> Already an account?</Link> } */}
  //   // </div>

  // )

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