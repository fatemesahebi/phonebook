import {HashRouter,Route,Routes} from "react-router-dom";
import Home from './componenets/Home/home'
import CallLog from "./componenets/callLog/callLog";
import './app-style.css'
import {ContactContexProvider} from "./componenets";
function App(){
    return(
        <>
            <ContactContexProvider>
                    <HashRouter>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path={'/:id'} element={<CallLog/>}/>
                        </Routes>
                    </HashRouter>
            </ContactContexProvider>

        </>
    )
}
export default App