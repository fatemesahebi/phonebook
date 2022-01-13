import {createContext, useState} from "react";

export const ShowModeContext=createContext({showMode:'', setShowMode:()=>{}})
function ShowModeContextProvider({children}){
    let [showMode,setShowMode]=useState('')

    return(
    <ShowModeContext.Provider value={{showMode,setShowMode}}>
        {children}
    </ShowModeContext.Provider>
    )
}
export default ShowModeContextProvider