/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBarConsole = () => {
  const [menu,setMenu] = useState(false)
  const navigate = useNavigate();
  return (
    <header className='headerPrivate'>
      <div onClick={()=>{navigate('/')}}>Imagen</div>
      <div onClick={()=>{setMenu(!menu)}}>Img Perfil</div>
      {
        menu === true ?
        <div className='headerPrivate__menu'>Menu desplegable</div>
        :
        <></>
      }
    </header>
  )
}

export default NavBarConsole