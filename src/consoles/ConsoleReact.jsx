
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import NavBarConsole from '../components/NavBarConsole'
import './styles.css'
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/mode-javascript"
import "ace-builds/src-min-noconflict/mode-css"
import "ace-builds/src-min-noconflict/mode-gitignore"

import "ace-builds/src-min-noconflict/mode-json";


import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-github_dark"
import "ace-builds/src-noconflict/theme-clouds_midnight"
import "ace-builds/src-noconflict/theme-pastel_on_dark"
import "ace-builds/src-noconflict/theme-one_dark"


import { BiLogoReact,BiHash } from "react-icons/bi";
import  Editor  from '@monaco-editor/react'

import { MdArrowForwardIos } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { HiCodeBracket } from "react-icons/hi2";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BsGit } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

const ConsoleReact = () => {
  const [files,setFiles] = useState([
    {
      name:"App.jsx",
      icon:<BiLogoReact style={{color:'#39A7FF',fontSize:"14px"}}/>,
      id:1,
      selected:false,
      order:null,
      onThis:false,
      folder:"src",
      mode:"javascript",
      file:`import React from 'react';
import './App.css'

function App (){
  return(
    <div>
      Home
    </div>
  )
}

export default App
`
    },
    {
      name:"main.jsx",
      icon:<BiLogoReact style={{color:'#39A7FF',fontSize:"14px"}}/>,
      id:2,
      selected:false,
      order:null,
      onThis:false,
      folder:"src",
      mode:"javascript",
      file:`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
  
)`
    },
    {
      name:"App.css",
      icon:<BiHash style={{color:'#39A7FF',fontSize:"14px"}}/>,
      id:3,
      selected:false,
      order:null,
      onThis:false,
      folder:"src",
      mode:"css",
      file:`/*archivo css*/`
    },
    {
      name:"Index.html",
      icon:<HiCodeBracket style={{color:"#FF6C22"}}/>,
      id:4,
      selected:false,
      order:null,
      onThis:false,
      folder:null,
      mode:"html",
      file:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
    },
    {
      name:".gitignore",
      icon:<BsGit style={{color:"#505050"}}/>,
      id:5,
      selected:false,
      order:null,
      onThis:false,
      folder:null,
      mode:"github",
      file:`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`
    },
    {
      name:"package.json",
      icon:<PiBracketsCurlyBold style={{color:"#F0DE36"}}/>,
      id:6,
      selected:false,
      order:null,
      onThis:false,
      folder:null,
      mode:"json",
      file:`{
  "name": "tester-del-editor",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@monaco-editor/react": "^4.6.0",
    "ace-builds": "^1.31.1",
    "dompurify": "^3.0.6",
    "react": "^18.2.0",
    "react-ace": "^10.1.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0",
    "react-router-dom": "^6.18.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "@vitejs/plugin-react": "^4.0.1",
    "eslint": "^8.44.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.1",
    "vite": "^4.4.0"
  }
}
`
    },
  ])

  const [headerFiles,setHeaderFiles] = useState([]);



  const handleCodeChange = (newCode, fileId) => {
    const updateFiles = files.map((item)=>{
      if(item.id === fileId){
        return {...item, file: newCode}
      }
      return item
    })

    setFiles(updateFiles)
  };
  
  function selectFile(id){
    const updateData = files.map((item)=>{
      if(item.id === id){
        return {...item,selected:true,onThis:true}
      }
      return {...item,onThis:false}
    });
    setFiles(updateData);

    //const updateHeaderFiles = headerFiles.find((item)=>item.id)
  }

  function quitFile(id) {
    console.log(id)
    //const replaceFile = files.find((item)=>item.id !== id && item.selected === true);

    const updatedFiles = files.map((item) => {
      if (item.id === id) {
        return { ...item, selected: false, onThis: false };
      }
      
      return item;
    });
  
    setFiles(updatedFiles);
  }
  

  function codeEditor (item){
    switch (item.mode) {
      case "javascript":
        return <>
          <AceEditor
            id="editor"
            aria-label="editor"
            mode={item.mode}
            theme="one_dark"
            name="editor"
            fontSize={14}
            width="100%"
            height="100%" // El editor tomará la altura del contenedor
            showPrintMargin={false}
            showGutter
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            value={item.file}
            onChange={(newCode) => {handleCodeChange(newCode, item.id)}}
            showLineNumbers
          />
        </>
      ;
      case "css":
        return <>
          <Editor
            height="100%"
            width="100%"
            theme='vs-dark'
            defaultLanguage={item.mode}
            value={item.file}
            //onMount={handleEditorDidMount}
          />
        </>
      ;
      case "html":
        return <>
          <Editor
            height="100%"
            width="100%"
            theme='vs-dark'
            defaultLanguage={item.mode}
            value={item.file}
            //onMount={handleEditorDidMount}
          />
        </>
      ;
      
      case "github":
        return <>
          <AceEditor
            id="editor"
            aria-label="editor"
            mode={item.mode}
            theme="one_dark"
            name="editor"
            fontSize={14}
            width="100%"
            height="100%" // El editor tomará la altura del contenedor
            showPrintMargin={false}
            showGutter
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            value={item.file}
            onChange={(newCode) => {handleCodeChange(newCode, item.id)}}
            showLineNumbers
          />
        </>
      ;
      
      case "json":
        return <>
          <AceEditor
            id="editor"
            aria-label="editor"
            mode={item.mode}
            theme="one_dark"
            name="editor"
            fontSize={14}
            width="100%"
            height="100%" // El editor tomará la altura del contenedor
            showPrintMargin={false}
            showGutter
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            value={item.file}
            onChange={(newCode) => {handleCodeChange(newCode, item.id)}}
            showLineNumbers
          />
        </>
      ;

      //json
    }
  }


  return (
    <>
      <NavBarConsole/>
      <main className='mainPrivate scroll'>
        <div className='IDE__JS__header'>
          <div style={{width:"100%",border:"1px solid black"}}>Consigna</div>
          <div className='IDE__JS__btn'>Ejecutar testers</div>
        </div>
        <div className='IDE__React'>
          <div className='IDE__React__aside'>
            <div className='IDE__React__aside-folder' >
              <MdArrowForwardIos/>
              <span style={{color:"#ffffff79"}}>node_modules</span>
            </div>
            <div className='IDE__React__aside-folder'>
              <MdArrowForwardIos/>
              <span>public</span>
            </div>
            <div className='IDE__React__aside-folder'>
              <SlArrowDown/>
              <span>src</span>
            </div>
            {
              
              files.map((item)=>
              <>
                {
                  item.folder === null ?
                  <div className='IDE__React__aside-folder' onClick={()=>{selectFile(item.id)}}>
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  :
                  <div className='IDE__React__aside-file' onClick={()=>{selectFile(item.id)}} key={item.id}>
                    {item.icon}
                    <span>{item.name}</span> 
                  </div>
                }
              </>
              )
            }
            
            <div className='IDE__React__aside-folder'>
              <PiBracketsCurlyBold style={{color:"#F0DE36"}}/>
              <span>package-lock.json</span>
            </div>
            
          </div>
          <div className='IDE__React__lienzo'>
            <div className='IDE__React__header'>
              {
                
                files.map((item)=>              
                  <>
                    {
                      item.selected === true ?
                      <div className={item.onThis === true ? 'IDE__React__header-iconCTA':'IDE__React__header-icon'}>
                        <div 
                        //onClick={()=>{selectFile(item.id)}} 
                        style={{display:"flex"}}>
                          <div style={{display:"flex",gap:6}} onClick={()=>{selectFile(item.id)}} >
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <div style={{height:20,width:20,backgroundColor:"#2c2c2c",marginLeft:10, borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>{quitFile(item.id)}}>x</div>
                        </div>
                      </div>
                      :
                      <></>
                    }
                  </>
                  )                  
                  
              }
            </div>
            <div style={{ height: "652px" }}>
              
              {
                
                files.map((item)=>
                <>
                  {
                    item.onThis === true && item.selected === true?
                    <>{codeEditor(item)}</>
                    :
                    <></>
                  }
                </>
                
                )
              
              }
             
            </div>
          </div>
        </div>

        <div style={{backgroundColor:"pink",height:50}}>Consola de react</div>

      </main>
    </>
  )
}

export default ConsoleReact