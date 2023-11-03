/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const [loggin,setLoggin] = useState(false);

    return(
        <AppContext.Provider value={{loggin,setLoggin}}>
            {props.children}        
        </AppContext.Provider>
    )
}