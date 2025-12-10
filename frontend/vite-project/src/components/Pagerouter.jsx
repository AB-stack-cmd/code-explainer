import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import CodeEntry from "./codeEntry";

export default function Pageroutes(){
    return(
       <Router>
        <Routes>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/" element={<CodeEntry/>}/>
        </Routes>
       </Router>
    )
}