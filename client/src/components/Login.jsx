import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import FormLogin from './FormLogin.jsx'

const Login = ({loginName, setLoginName}) => {
  const [show, setShow] = useState(true)

  function openSignUp() {
    setShow(!show);
  }

  return (
    <div>
      {/* <button onClick={openSignUp}>Signup</button> */}
      {/* <Modal isOpen={show} onRequestClose={() => {setShow(false)}} ariaHideApp={false}>
        <FormLogin closeModal={() => setShow(false)} loginName={loginName} setLoginName={setLoginName}/>
      </Modal> */}
    </div>
  )
}

export default Login;