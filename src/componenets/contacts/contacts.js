import './contacts-styles.css'
import '../selectContact/selectContact'
import {ContactContex} from "../contex/ContactContex";
import {useContext} from "react";
import {SelectUserContext, ShowModeContext} from "../index";

function Contacts({contact}){
    const {setShowMode}=useContext(ShowModeContext)
    const{setSelectUser}=useContext(SelectUserContext)

    function HandleSelectContact(userSelect){
        setSelectUser({...userSelect})
        setShowMode('show')
    }
//
return (
        <div>
            <div className={'contact-box'} onClick={()=>HandleSelectContact(contact)}>
                <img className={'profile-photo'} src={contact.photo} alt={'contact'}/>
                <div>
                    <p>{contact.name}</p>
                    <p className={'status'}>{contact.group}</p>
                </div>
                <p className={'phone-Number'}>{contact.phoneNumber}</p>
            </div>
        </div>
)

}
export default Contacts