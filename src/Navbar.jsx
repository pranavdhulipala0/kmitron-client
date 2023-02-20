import React, { useInsertionEffect } from "react";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import kmit from './kmit.jpg';
import Logo from './logo.png';
import { useEffect } from "react";
import { useState } from "react";
const Navbar = ({isAuth,setIsAuth}) => {
  function logout(){
    localStorage.setItem("flag",0);
    localStorage.clear()
    window.reload();
    setIsAuth(false)
    setPhase("");

    // props.val = false;
}


const [phase,setPhase] = useState("");
  return (
    <div class="container ">
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link class="navbar-brand" to="/articles">
            <img src = {Logo} id = "logos"></img>
        </Link>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/articles">
                Home <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item">
              {isAuth && <Link class="nav-link" to="/submissions">
                Submit
              </Link>}
            </li>
            <li>
            {isAuth && <Link class="nav-link" to = "/" onClick = {logout} >Logout
                {/* {props.val?"":"Logout"} */}
              </Link>}

            </li>
            
            {/* {console.log(isAuth)} */}
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
