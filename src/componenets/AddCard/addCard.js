import deleteIcon from "../../images/icons8-delete-48.png";
import verifiedIcon from "../../images/icons8-verified-account-64.png";
import newAvatar from "../../images/icons8-male-user-100.png";

function AddCard({onVerify,onChange}){

    return(
        <div className={'select-contact'}>
            <div id={'option-part'}>
                <img src={deleteIcon} alt={'delete icon'} id={'delete'}  />
                <img src={verifiedIcon} alt={'verify icon'} id={'verify'} onClick={onVerify} />
            </div>
            <img src={newAvatar} alt={'contact'}/>
            <form>
                <div>
                    <label htmlFor={'name'}>Name:</label>
                    <input id={'name'} type='text' name={'name'} onChange={onChange} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input id={'phoneNumber'} type='text' name={'phoneNumber'} onChange={onChange}  />
                </div>
                <div>
                    <label>Email:</label>
                    <input  type='text' name={'email'} onChange={onChange}/>
                </div>
                <div>
                    <label>group:</label>
                    <input type='text' name={'group'} onChange={onChange}/>
                </div>
                <div>
                    <label>Note:</label>
                    <input type='text' name={'note'} onChange={onChange}/>
                </div>
            </form>
        </div>

    )
}
export default AddCard