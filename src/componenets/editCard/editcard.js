import deleteIcon from "../../images/icons8-delete-48.png";
import verifiedIcon from "../../images/icons8-verified-account-64.png";
import {useContext} from "react";
import {SelectUserContext, ShowModeContext} from "../index";
import {ContactContex} from "../contex/ContactContex";

function EditCard({onChange,onVerify}){
    const {selectUser,setSelectUser}=useContext(SelectUserContext)
    const {contacts,setContacts}=useContext(ContactContex)
    const {setShowMode}=useContext(ShowModeContext)


    function HandleDelete(id){
        setContacts(contacts.filter(item=>item.id!==id))
        setShowMode('')
        setSelectUser(contacts[0])
    }

    return(
        <div className={'select-contact'}>
            <div id={'option-part'}>
                <img src={deleteIcon} alt={'delete icon'} id={'delete'}  onClick={()=>HandleDelete(selectUser.id)}/>
                <img src={verifiedIcon} alt={'verify icon'} id={'verify'} onClick={onVerify} />
            </div>
            <img src={selectUser.photo} alt={'contact'}/>
            <form>
                <div>
                    <label htmlFor={'name'}>Name:</label>
                    <input id={'name'} type='text' name={'name'} value={selectUser.name} onChange={onChange}/>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input value={selectUser.phoneNumber} name={'phoneNumber'} onChange={onChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input value={selectUser.email} name={'email'} onChange={onChange}/>
                </div>
                <div>
                    <label>group:</label>
                    <input value={selectUser.group} name={'group'} onChange={onChange}/>
                </div>
                <div>
                    <label>Note:</label>
                    <input value={selectUser.note} name={'note'} onChange={onChange}/>
                </div>
            </form>
        </div>
    )
}
export default EditCard