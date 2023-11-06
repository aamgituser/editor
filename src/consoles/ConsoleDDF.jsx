/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import NavBarConsole from '../components/NavBarConsole'
import { v4 as uuidv4 } from 'uuid';
import { HiPlus } from "react-icons/hi";

function Inicio(){
  return(
    <>
      <div className='extremo'>I</div>
      <div className='arrow'></div>
    </>
  )
}
function Final(){
  return(
    <>
      <div className='arrow'></div>
      <div className='extremo'>F</div>
    </>
  )
}
function Proceso({id,contenido,valor,onChange}){
  return(
    <>
      <div className='arrow'></div>
      <div className='proceso'>
        <input style={{width:"60%"}} type="text" value={valor} onChange={(e) => onChange(id, e.target.value)} />
      </div>
      <div className='arrow'></div>
    </>
  )
}
function Entrada({id,contenido,valor,onChange}){
  return(
    <>
      <div className='arrow'></div>
      <div className='input'>
        <input style={{width:"60%"}} type="text" value={valor} onChange={(e) => onChange(id, e.target.value)} />
      </div>
      <div className='arrow'></div>
    </>
  )
}
function Salida({id,contenido,valor,onChange}){
  return(
    <>
      <div className='arrow'></div>
      <div className='output'>
        <input style={{width:"60%"}} type="text" value={valor} onChange={(e) => onChange(id, e.target.value)} />
      </div>
      <div className='arrow'></div>
    </>
  )
}
function IfStructure({id,contenido,valor,onChange,arrayEstructuras,setSelectedGeneral,selectedGeneral,setSelectedStructure,getSelectedComponent,selectedStructure}){
  return(
    <>
      <div className='arrow'></div>
      <div className='arrow'></div>
      <div className='bloque-if'>
        <div className='bloque-if-condicion-container'>
          <div className='bloque-if-condicion'>
            <input style={{width:"60%"}} type="text" value={valor} onChange={(e) => onChange(id, e.target.value)} />
          </div>
        </div>
        <div className='bloque-if-branch'>
          <div className='bloque-if-branch-item-T'>V</div>
          <div className='bloque-if-branch-item-F'>F</div>
        </div>
        <div className='bloque-if-grid-container'>
          <div className='bloque-if-grid-conector'></div>
          <div className='bloque-if-grid'>
            <div className='bloque-if-branch-container'>
              <div className='bloque-if-branch-contenido'>
                {
                  arrayEstructuras.find((element)=>element.parentId === id && element.branch === "true") ?
                  <>
                    {
                      arrayEstructuras.map((element)=>
                        <>
                          {
                            element.parentId === id && element.branch === "true" ?
                            <>{getSelectedComponent(element)}</>
                            :
                            <></>
                          }
                        </>
                      )
                    }
                  </>
                  :
                  <>
                  </>
                }
                {
                  selectedGeneral === false ?
                  <>
                    {
                      selectedStructure.id === id && selectedStructure.branch === "true" ?
                      <div className='IDE__DDF__lienzo-btn-CTA' onClick={()=>{
                        setSelectedGeneral(false)
                        setSelectedStructure({id:id,branch:"true"})
                      }}>
                        <HiPlus/>
                      </div>
                      :
                      <div className='IDE__DDF__lienzo-btn' onClick={()=>{
                        setSelectedGeneral(false)
                        setSelectedStructure({id:id,branch:"true"})
                      }}>
                        <HiPlus/>
                      </div>
                    }
                  </>
                  :
                  <div className='IDE__DDF__lienzo-btn' onClick={()=>{
                    setSelectedGeneral(false)
                    setSelectedStructure({id:id,branch:"true"})
                  }}>
                    <HiPlus/>
                  </div>
                }
                
              </div>
            </div>
            <div className='bloque-if-branch-container'>
              <div className='bloque-if-branch-contenido'>
                {
                  arrayEstructuras.find((element)=>element.parentId === id && element.branch === "false") ?
                  <>
                    {
                      arrayEstructuras.map((element)=>
                        <>
                          {
                            element.parentId === id && element.branch === "false" ?
                            <>{getSelectedComponent(element)}</>
                            :
                            <></>
                          }
                        </>
                      )
                    }
                  </>
                  :
                  <></>
                }

                {
                  selectedGeneral === false ?
                  <>
                    {
                      selectedStructure.id === id && selectedStructure.branch === "false" ?
                      <div className='IDE__DDF__lienzo-btn-CTA' onClick={()=>{
                        setSelectedGeneral(false)
                        setSelectedStructure({id:id,branch:"false"})
                      }}>
                        <HiPlus/>
                      </div>
                      :
                      <div className='IDE__DDF__lienzo-btn' onClick={()=>{
                        setSelectedGeneral(false)
                        setSelectedStructure({id:id,branch:"false"})
                      }}>
                        <HiPlus/>
                      </div>
                    }
                  </>
                  :
                  <div className='IDE__DDF__lienzo-btn' onClick={()=>{
                    setSelectedGeneral(false)
                    setSelectedStructure({id:id,branch:"false"})
                  }}>
                    <HiPlus/>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

const ConsoleDDF = () => {

  const [inputValues, setInputValues] = useState([]);
  const [selectedGeneral,setSelectedGeneral] = useState(true)
  const [selectedStructure,setSelectedStructure] = useState(null)

  const handleInputChange = (id, newValue) => {
    const newValues = inputValues.map((item) =>
      item.id === id ? { ...item, valor: newValue } : item
    );
    setInputValues(newValues);
  };

  const handleAddInput = (name) => {
    const newId = uuidv4();
    if(selectedGeneral === true){
      const newInput = { id: newId, contenido: '', valor: '',name:name,branch:null,parentId:null };
      setInputValues([...inputValues, newInput]);
    }else if(selectedGeneral === false){
      console.log('rama de un if')
      const newInput = {id:newId,contenido:'',valor:'',name:name,branch: selectedStructure.branch, parentId: selectedStructure.id};
      setInputValues([...inputValues, newInput]);
      console.log(newInput)
    }
  };

  
  function getSelectedComponent(item){
    switch(item.name){
      case "entrada":
        return <Entrada
        id={item.id}
        contenido={item.contenido}
        valor={item.valor}
        onChange={handleInputChange}
        />
      case "salida":
        return <Salida
        id={item.id}
        contenido={item.contenido}
        valor={item.valor}
        onChange={handleInputChange}
        />
      case "proceso":
        return <Proceso
        id={item.id}
        contenido={item.contenido}
        valor={item.valor}
        onChange={handleInputChange}
        />

      case "if":
        return <IfStructure
        id={item.id}
        contenido={item.contenido}
        valor={item.valor}
        onChange={handleInputChange}
        arrayEstructuras={inputValues}
        setSelectedGeneral={setSelectedGeneral}
        selectedGeneral={selectedGeneral}
        setSelectedStructure={setSelectedStructure}
        getSelectedComponent={getSelectedComponent}
        selectedStructure = {selectedStructure}
        />

      case "inicio":
        return <Inicio/>
      
      case "final":
        return <Final/>
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
        <div className='IDE__DDF'>
          <div className='IDE__DDF__lienzo scroll'>
            <div className='IDE__DDF__lienzo-container'>
            {/*///////////////////////*/}      
            {
              inputValues.length === 0 ?
              <></>
              :
              <>
                {
                  inputValues.map((item)=>(
                    <>
                      {
                        item.parentId === null ?
                        <>
                          {
                            getSelectedComponent(item)
                          }
                        </>
                        :
                        <></>
                      }
                    </>
                  ))
                }
              </>
            }
            {
              selectedGeneral === true ?
              <div onClick={()=>{setSelectedGeneral(true)}} className='IDE__DDF__lienzo-btn-CTA'>
                <HiPlus/>
              </div>
              :
              <div onClick={()=>{setSelectedGeneral(true)}} className='IDE__DDF__lienzo-btn'>
                <HiPlus/>
              </div>
            }

            {/*////////////////////////*/}
            </div>
          </div>
          <div className='IDE__DDF__aside'>

            <div className='IDE__DDF__aside-icon' onClick={()=>{handleAddInput("inicio")}}>
              <div style={{width:"30px",display:"flex",justifyContent:"center"}}>
                <div className='IDE__DDF__aside-icon-extreme'>I</div>
              </div>
              <span className="IDE__DFF__aside-ttl">Inicio</span>
            </div>

            <div className='IDE__DDF__aside-icon' onClick={()=>{handleAddInput("final")}}>
              <div style={{width:"30px",display:"flex",justifyContent:"center"}}>
                <div className='IDE__DDF__aside-icon-extreme'>F</div>
              </div>
              <span className="IDE__DFF__aside-ttl">Final</span>
            </div>
            <div className='IDE__DDF__aside-icon' onClick={()=>{handleAddInput("entrada")}}>
              <div className='trapezoid'></div>
              <span className="IDE__DFF__aside-ttl">Entrada</span>
            </div>
            <div className='IDE__DDF__aside-icon' onClick={()=>{handleAddInput("salida")}}>
              <div className='trapezoid-invert'></div>
              <span className="IDE__DFF__aside-ttl">Salida</span>
            </div>
            <div className='IDE__DDF__aside-icon' onClick={()=>{handleAddInput("if")}}>

              <div style={{height:20,width:30,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <div style={{width:20,height:7,backgroundColor:"red",margin:"0 auto"}}></div>
                <div style={{height:5,width:1,backgroundColor:"black",margin:"0 auto"}}></div>
                <div style={{height:5,width:20,margin:"0 auto",borderTop:"1px solid black",borderLeft:"1px solid black",borderRight:"1px solid black"}}></div>
              </div>
              <span className="IDE__DFF__aside-ttl">If</span>
            </div>

            <div className='IDE__DDF__aside-icon' onClick={()=>{handleAddInput("proceso")}}>

              <div style={{height:20,width:30,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <div style={{height:5,width:1,backgroundColor:"black",margin:"0 auto"}}></div>
                <div style={{width:25,height:9,backgroundColor:"red",margin:"0 auto",borderRadius:2}}></div>
                <div style={{height:5,width:1,backgroundColor:"black",margin:"0 auto"}}></div>
              </div>
              <span className="IDE__DFF__aside-ttl">Proceso</span>
            </div>

            <div className='IDE__DDF__aside-icon' onClick={()=>{
              setInputValues([])
              setSelectedGeneral(true)
              setSelectedStructure(null)
              }} style={{justifyContent:"center",marginTop:20}}>
              <span className='IDE__DDF__aside-delete-ttl'>Borrar</span>
            </div>
          </div>
        </div>
        <div>
          Consola de mensajes
        </div>
        <div style={{height:60}}>borde</div>
      </main>
    </>
  )
}

export default ConsoleDDF