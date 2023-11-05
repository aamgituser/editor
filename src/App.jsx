import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Editor  from '@monaco-editor/react'
import { NavLink, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import LoginScreen from './screens/LoginScreen'
import ConsoleJS from './consoles/ConsoleJS'
import ConsoleReact from './consoles/ConsoleReact'
import Tester from './consoles/Tester'
import ConsoleDDF from './consoles/ConsoleDDF'

function ConsoleJavascript(){
  const navigate = useNavigate();
  return(
    <>
      <button onClick={()=>{navigate('/')}}>Home je</button>
      <Editor
        width="100%"
        height="600px"
        defaultLanguage='javascript'
        theme='vs-dark'
      />
    </>
  )
}


function App() {
  const [count, setCount] = useState(0);
  const {loggin} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const arr = [1,2,3];
    console.log(typeof arr)
  }, [])
  
  return (
    <>
      {
        loggin === true ?
        <Routes>
          <Route path='/' element={<>
            <header className='header'></header>
            <h1>Testers de consolas</h1>
            <NavLink style={{display:"block"}} to='/react'>Consola React</NavLink>  
            <NavLink style={{display:"block"}} to='/javascript'>Consola Javascript</NavLink>  
            <NavLink style={{display:"block"}} to='/diagrama'>Consola Diagrama De Flujo</NavLink>  
          </>}/>
          
          <Route path='/react' element={<ConsoleReact/>}/>
          <Route path='/javascript' element={<ConsoleJS/>}/>
          <Route path='/diagrama' element={<ConsoleDDF/>}/>

          <Route path='/login' element={<Navigate to='/'/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/*' element={<Navigate to='/login'/>}/>
        </Routes>
      }
    </>
  )
}

export default App
