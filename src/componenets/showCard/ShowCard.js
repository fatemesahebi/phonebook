import closeIcon from "../../images/icons8-close-60.png";
import editIcon from "../../images/icons8-edit-96.png";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {SelectUserContext, ShowModeContext} from "../index";

function ShowCard(){
    const {selectUser}=useContext(SelectUserContext)
    const {setShowMode}=useContext(ShowModeContext)
    function HandlerClose(){
        setShowMode('')
    }
    function HandlerEdit(){
        setShowMode('edit')
    }

    return(
        <div className={'select-contact'}>
            <div id={'option-part'}>
                <img src={closeIcon} alt={'close icon'} id={'close'} onClick={HandlerClose}/>
                <img src={editIcon} alt={'edit icon'} id={'edit'} onClick={HandlerEdit}/>
            </div>
            <img src={selectUser.photo} alt={'contact'}/>
            <div>
                <p>Name:</p>
                <p className={'contact-info'}>{selectUser.name}</p>
            </div>
            <div>
                <p>Phone Number:</p>
                <p className={'contact-info'}>{selectUser.phoneNumber}</p>
            </div>
            <div>
                <p>Email:</p>
                <p className={'contact-info'}>{selectUser.email}</p>
            </div>
            <div>
                <p>groups:</p>
                <p className={'contact-info'}>{selectUser.group}</p>
            </div>

            <div>
                <p>Note:</p>
                <p className={'contact-info'}>{selectUser.note}</p>
            </div>
            <button className={'select-contact-btn'}><Link className={'select-contact-link'} to={`/${selectUser.id}`}>Call log</Link></button>

        </div>
    )
}
export default ShowCard