import {createContext, useState} from "react";
import newAvatar from "../../images/icons8-male-user-100.png";

export  const SelectUserContext=createContext({selectUser:{},setSelectUser:()=>{}})
function SelectUserContextProvider({children}){
    let [selectUser,setSelectUser]=useState({name:'',phoneNumber:'',group:'',note:'',photo:newAvatar, email:'',callInfo:[]})
    return(
        <SelectUserContext.Provider value={{selectUser,setSelectUser}}>
            {children}
        </SelectUserContext.Provider>
    )

}
export default SelectUserContextProvider