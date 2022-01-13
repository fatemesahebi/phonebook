import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './componenets/Home/home'
import CallLog from "./componenets/callLog/callLog";
import './app-style.css'
import {ContactContexProvider} from "./componenets";
function App(){
    return(
        <>
            <ContactContexProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/:id'} element={<CallLog/>}/>
                        </Routes>
                    </BrowserRouter>
            </ContactContexProvider>

        </>
    )
}
export default App