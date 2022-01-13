// import {callList,contactList} from './../info'
import {Link, useParams} from "react-router-dom";
import './callPart-styles.css';
import outCall from './../../images/icons8-outgoing-call-48.png'
import inCall from './../../images/icons8-incoming-call-48.png'
import missCall from './../../images/icons8-missed-call-48.png'
import {useEffect, useState} from "react";
import avatar8
    from "../../images/kisspng-user-logo-information-service-design.png";

function CallLog(){
    let param=useParams()

    const [callList,setCallList]=useState({
        name: '',
        phoneNumber: '',
        group: '',
        note: '',
        photo:'',
        email: '',
        id: '',
        callInfo:[]
    })
    useEffect(()=>{
      fetch(`/api/contacts/${param.id}`)
          .then(res=>res.json())
          .then(data=>setCallList(data.contact))
    },[])

    return(
        <div id={'callPart'}>
            <div className={'callBox'}>
                <div className={'callBox-personInfo'}>
                    <img className={'callBox-profile'} src={callList.photo} alt={`${callList.name}`}/>
                    <h3>{callList.name}</h3>
                    <h4>{callList.phoneNumber}</h4>
                    <button className={'back'}><Link className={'link'} to={'/'}>Back To List</Link></button>
                </div>
                <div>
                    <h2>Call Log</h2>
                    <div className={'callBox-list'}>
                        {(callList.callInfo.length===0)? <p>There is no call</p> : callList.callInfo.map(item=>(
                                <div className={'callBox-call'}>
                                <p>{item.time}</p>
                                    <>{(item.status==='call-in')&& <img className={'callImage'} src={inCall}/>}</>
                                    <>{(item.status==='call-out')&& <img className={'callImage'} src={outCall}/>}</>
                                    <>{(item.status==='call-miss')&& <img className={'callImage'} src={missCall}/>}</>
                                    </div>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}
export default CallLog