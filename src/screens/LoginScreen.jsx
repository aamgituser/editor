import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const LoginScreen = () => {
  const {setLoggin} = useContext(AppContext);
  return (
    <>
      <div>LoginScreen</div>
      <button onClick={()=>{setLoggin(true)}}>Login</button>    
    </>
  )
}

export default LoginScreen