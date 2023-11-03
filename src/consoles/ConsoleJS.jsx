/* eslint-disable no-unused-vars */



import  Editor  from '@monaco-editor/react'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import NavBarConsole from '../components/NavBarConsole'
import Main from '../components/Main'
import { useRef, useState } from 'react'
import DOMPurify from 'dompurify'


const ConsoleJS = () => {
  const navigate = useNavigate()
  ////////////////////////////////////////////////////////////
  const [jsCode,setJsCode] = useState('');
  const editorRef = useRef(null);
  const [error,setError] = useState(null);


  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    
    editor.onDidChangeModelContent(() => {
      setJsCode(editor.getValue());
      //setError(null); // Restablecer el estado de error
    });
  }

  function ejecutar() {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours > 12 ? hours - 12 : hours;
    const currentTime = `${formattedHours}:${minutes}:${seconds} ${amPm}`;

    const styledTime = `<span style="color: red;">${currentTime}</span>`;

    try {
      const customConsole = {
        
        log: (message) => {
          if (typeof message === 'object') {
            message = JSON.stringify(message);
          }  
          appendToConsole(' ' + message);
        },
        warn: (message) => {
          if (typeof message === 'object') {
            message = JSON.stringify(message);
          }
          appendToConsole(' ⚠️ ' + message, 'warn');
        },
        error: (message) => {
          if (typeof message === 'object') {
            message = JSON.stringify(message);
          }
          appendToConsole(' ❌ Warning: ' + message, 'error');
        },
      };
  
      const sanitizedJsCode = DOMPurify.sanitize(jsCode);
  
      const evalFunction = new Function('console', sanitizedJsCode);
      evalFunction(customConsole);
    } catch (error) {
      appendToConsole(' ❌ Error: ' + error.message, 'error');
    }
  }
  
  
  function appendToConsole(message, type = 'log') {
    const consoleDiv = document.querySelector('.IDE__JS__console');
    const messageElement = document.createElement('div');
    
    if (type === 'warn') {
      const warningIcon = document.createElement('span');
      warningIcon.classList.add('warning-icon');
      messageElement.appendChild(warningIcon);
      messageElement.classList.add('console-warn');
    } else if (type === 'error') {
      const errorIcon = document.createElement('span');
      errorIcon.classList.add('error-icon');
      messageElement.appendChild(errorIcon);
      messageElement.classList.add('console-error');
    }

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours > 12 ? hours - 12 : hours;
    const formattedTime = `${formattedHours}:${minutes}:${seconds} ${amPm}`;
    
    // Aplica estilo de color rojo a la cadena de tiempo
    const styledTime = `<span style="color: #a8a8a8;margin-right:12px">${formattedTime}</span>`;
    
    messageElement.innerHTML = `${styledTime} ${message}`;
    consoleDiv.appendChild(messageElement);
  }
  


  return (
    <>  
      <NavBarConsole/>
      <main className='mainPrivate scroll'>
        <div className='IDE__JS__header'>
          <div style={{width:"100%",border:"1px solid black"}}>Consigna</div>
          <div className='IDE__JS__btn'>Ejecutar testers</div>
        </div>
        <div style={{width:"97%",margin:"0 auto",position:"relative"}}>
          <div style={{height:25,width:"100%",boxSizing:"border-box",backgroundColor:"green",padding:"0 10px",display:"flex",justifyContent:"flex-end"}}>
            <div style={{cursor:"pointer"}} onClick={()=>{
              ejecutar()}}>Ic</div>
          </div>
          <Editor
            width="100%"
            height="550px"
            defaultLanguage='javascript'
            theme='vs-dark'
            onMount={handleEditorDidMount}
          />
          <div style={{width:"100%",boxSizing:"border-box",padding:"5px 15px",backgroundColor:"black",color:"white"}}>
            Terminal
          </div>
          <div className='IDE__JS__consoleCont'>
            <div className='IDE__JS__console'>
            </div>
          </div>
        </div>
        <div style={{height:80}}>Borde</div>
      </main>
        
    </>
  )
}

export default ConsoleJS
