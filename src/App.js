import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Articles from './Articles';
import SubmitBlog from './SubmitBlog';
import {Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import FullBlog from './FullBlog';
const App = ()=>{
    const [isAuth,setIsAuth]=useState(false)
    function logout(){
        localStorage.setItem("flag",0);
        console.log("Logged out");
    }

    // const [val, setVal] = useState("");

    // localStorage.setItem("flag",1);
    return (
        <div>
            <Navbar isAuth={isAuth}/>
            <Routes>
                <Route path = "/articles" element = {<Articles/>}/>
                <Route path = "/" element = {<Login setIsAuth={setIsAuth}/>}/>++
                <Route path = "/submissions" element = {<SubmitBlog/>}/>
                <Route path = "/logout" onClick = {logout} element = {<Login/>}/>
                <Route path = "/viewblog" element = {<FullBlog/>} />
            </Routes>
            {/* <Login/> */}
            {/* <Articles/>
            <SubmitBlog/> */}
            {/* <Footer/> */}

        </div>
    )
}


export default App;