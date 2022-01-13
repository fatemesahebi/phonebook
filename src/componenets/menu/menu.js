import contactAddIcon from '../../images/icons8-add-contact-64.png'
import  './menu-styles.css'
import {useContext, useEffect} from "react";
import {SelectUserContext, ShowModeContext} from "../index";
import newAvatar from "../../images/icons8-male-user-100.png";
function Menu({filter,setFilter}) {
    const {setShowMode}=useContext(ShowModeContext)
    const {setSelectUser}=useContext(SelectUserContext)

    function HandleFilter(filter){
      setFilter(filter)

    }
    const active={
        fontWeight:700,
        color:'white',
    }

    const HandleAdd=()=>{
        setShowMode('add')
        setSelectUser({name:'',phoneNumber:'',group:'',note:'',photo:newAvatar, email:'',callInfo:[]})
    }

    const menuItems=['all','friend','co-workers','family','other']
    return (
        <div className={'menuBox'}>
            <img alt={'add contact icon'} src={contactAddIcon} onClick={HandleAdd}/>
            {
                menuItems.map((item,index)=>
                    <p key={index} className={'filter-text'} style={(item===filter)? active:{}}
                onClick={()=>HandleFilter(item,index)}>{item}
                    </p>)
            }

        </div>
    );
}
export default Menu