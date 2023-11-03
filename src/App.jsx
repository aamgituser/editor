import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Editor  from '@monaco-editor/react'
import { NavLink, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import LoginScreen from './screens/LoginScreen'
import ConsoleJS from './consoles/ConsoleJS'

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
            <h1>Tester del editor</h1>
            <NavLink style={{display:"block"}} to='/consolehtml'>Ir a la consola HTML</NavLink>
            <NavLink style={{display:"block"}} to='/consolejs'>Ir a la consola JS</NavLink>
            <NavLink style={{display:"block"}} to='/consolecss'>Ir a la consola CSS</NavLink>
            <NavLink style={{display:"block"}} to='/tester'>Tester</NavLink>
          </>}/>
          
          <Route path='/consolejs' element={<ConsoleJavascript/>}/>

          <Route path='/consolecss' element={<>
            <button onClick={()=>{navigate('/')}}>Home</button>
            <Editor
              width="100%"
              height="90vh"
              defaultLanguage='css'
              theme='vs-dark'
            />
          </>}/>
          
          <Route path='/consolehtml' element={<>
            <button onClick={()=>{navigate('/')}}>Home</button>
            <Editor
              width="100%"
              height="90vh"
              defaultLanguage='html'
              theme='vs-dark'
            />
          </>}/>


          <Route path='/tester' element={<>
            <ConsoleJS/>
          </>}/>


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
