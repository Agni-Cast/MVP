import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import FormSignup from './FormSignup.jsx'

const SignUp = ({loginName, setLoginName}) => {
  const [show, setShow] = useState(true)

  function openSignUp() {
    setShow(!show);
  }

  return (
    <div>
      {/* <button onClick={openSignUp}>Signup</button> */}
      {/* <Modal isOpen={show} onRequestClose={() => {setShow(false)}} ariaHideApp={false}>
        <FormSignup closeModal={() => setShow(false)} loginName={loginName} setLoginName={setLoginName}/>
      </Modal> */}
    </div>
  )
}

export default SignUp;