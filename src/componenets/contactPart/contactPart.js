import searchIcon from '../../images/icons8-search-64.png'
import Contacts from "../contacts/contacts";
import './contactPart-styles.css'
import {ContactContex} from "../contex/ContactContex";
import {useContext} from "react";
import {useState} from "react";

function ContactPart({filter, setFilter}) {
    const {contacts, setContacts} = useContext(ContactContex)

    const [searchTerm, setSearchTerm] = useState('')


    const HandleSearch = e => {
        e.preventDefault()
        setSearchTerm(e.target.value);
    }
    return (
        <>
            <div id={'contactPartContainer'}>
                <div id={'contactPartContainer-head'}>
                    <h1 id={'filterSelect'}>{filter}</h1>
                    <div>
                        <input placeholder={'search your contact'} id={'search'} onChange={HandleSearch}/>
                        <img src={searchIcon} alt={'search icon'}/>
                    </div>
                </div>
                {contacts.filter(item => (((filter==='all')? item : item.group===filter) && (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
                    || item.email.toLowerCase().includes(searchTerm.toLowerCase()))
                )).map((contact) => <Contacts
                    filter={filter} setFilter={setFilter} contact={contact}/>)}
            </div>
        </>


    );
}

export default ContactPart