import {createContext, useEffect, useState} from "react";
export const ContactContex=createContext({contacts:[],setContacts:()=>{}})
function ContactContexProvider({children}){
    const [contacts,setContacts]=useState([])
useEffect(()=>{
    fetch('/api/contacts')
        .then(res=>res.json())
        .then(data=>setContacts(data.contacts))
},[])
    return(
        <ContactContex.Provider value={{contacts,setContacts}}>
            {children}
        </ContactContex.Provider>
    )
}
export default ContactContexProvider