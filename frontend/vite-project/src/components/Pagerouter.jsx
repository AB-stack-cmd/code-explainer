import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "../pages/Login";
import CodeEntry from "./codeEntry";
import SignUpPage from "../pages/Login";

const Pageroutes = ()=>{
    return(
       <Router>
        <Routes>
            <Route path="/login" element={<SignUpPage/>}/>
            <Route path="/" element={<CodeEntry/>}/>
        </Routes>
       </Router>
    )
}
export default Pageroutes;