import React, {useEffect} from "react";
import Menu from "../menu/menu";
import ContactPart from "../contactPart/contactPart";
import SelectContact from "../selectContact/selectContact";
import {useState} from "react";
import { SelectUserContextProvider, ShowModeContextProvider} from "../index";
function Home(){
    const [filter,setFilter]=useState('all')
    const [selectContactShow,setSelectContactShow]=useState(false)
    return(
        <div className={'container'}>
            <SelectUserContextProvider>
                <ShowModeContextProvider>
                    <Menu  filter={filter} setFilter={setFilter}/>
                    <ContactPart
                        filter={filter} setFilter={setFilter}
                        selectContactShow={selectContactShow} setSelectContactShow={setSelectContactShow}
                    />
                    <SelectContact
                        selectContactShow={selectContactShow}   setSelectContactShow={setSelectContactShow}

                    />
                </ShowModeContextProvider>
            </SelectUserContextProvider>


        </div>

    )
}
export default Home