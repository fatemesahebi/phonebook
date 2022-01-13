import './selectContact-styles.css'
import newAvatar from '../../images/icons8-male-user-100.png'
import {ContactContex} from "../contex/ContactContex";
import {useContext} from "react";
import {EditCard, SelectUserContext, ShowCard, ShowModeContext, AddCard} from "../index";


function SelectContact() {
    const {contacts, setContacts} = useContext(ContactContex)
    const {showMode, setShowMode} = useContext(ShowModeContext)
    const {selectUser, setSelectUser} = useContext(SelectUserContext)


    const HandleChange = (e) => {
        const {name, value} = e.target
        if (showMode === 'add') {
            setSelectUser((preState) => ({...preState, [name]: value}))
        } else
            setSelectUser(preSelect => ({...preSelect, [name]: value}))

    }
    const HandleVerify = () => {
        if (showMode === 'edit')
        {
            setContacts(contacts.map(item => (item.id === selectUser.id) ? selectUser : item))
        fetch(`/api/contacts/${selectUser.id}`, {
            method: 'put',
            body:JSON.stringify(selectUser)
        }).then(res =>(res.status===200)? alert('your contact updated successfully') :alert('some thing is wrong! please try again'))
        }
        else {
            setSelectUser(preSelect => ({...preSelect, id: Math.floor(Math.random() * 10000)}))
            setContacts(preContacts => ([...preContacts, selectUser]))
            fetch('/api/contacts', {
                method: 'post',
                body: JSON.stringify(selectUser)
            }).then(res =>(res.status===201)? alert('new contact added successfully') :alert('some thing is wrong! please try again'))}
        setShowMode('show')

    }


    return (
        <>
            {(showMode === 'show') && <ShowCard/>}
            {(showMode === 'edit') && <EditCard onChange={HandleChange} onVerify={HandleVerify}/>}
            {(showMode === 'add') && <AddCard onChange={HandleChange} onVerify={HandleVerify}/>}
        </>
    )
}

export default SelectContact