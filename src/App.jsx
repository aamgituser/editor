import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Editor  from '@monaco-editor/react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <h1>Tester del editor</h1>
          <NavLink to='/tester'>Ir a la consola</NavLink>
        </>}/>
        <Route path='/tester' element={<>
          <button onClick={()=>{navigate('/')}}>Home</button>
          <Editor
            width="100%"
            height="90vh"
            defaultLanguage='javascript'
            theme='vs-dark'
          />
        </>}/>
      </Routes>
    </>
  )
}

export default App
