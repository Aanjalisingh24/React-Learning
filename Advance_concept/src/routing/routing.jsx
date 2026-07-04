import { Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./navbar";

function routing(){
    return(
        <div>
            <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
       </Routes>

        </div>
    )
}

export default routing;