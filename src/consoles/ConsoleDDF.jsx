/* eslint-disable no-unused-vars */
import React from 'react'
import NavBarConsole from '../components/NavBarConsole'

const ConsoleDDF = () => {
  return (
    <>
      <NavBarConsole/>
      <main className='mainPrivate scroll'>
        <div className='IDE__JS__header'>
          <div style={{width:"100%",border:"1px solid black"}}>Consigna</div>
          <div className='IDE__JS__btn'>Ejecutar testers</div>
        </div>
        <div className='IDE__DDF'>
          Diagrama de flujo
        </div>
        <div style={{height:60}}>borde</div>
      </main>
    </>
  )
}

export default ConsoleDDF