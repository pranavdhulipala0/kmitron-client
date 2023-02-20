import React from 'react'
import Navbar from './Navbar'
import Card from './Card';
import { useState } from 'react';
import Articles from './Articles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login({setIsAuth}){
    const Navigate = useNavigate();
    const [data,setData] = useState({"username":"", password:""});
    const [passsword,setPassword] = useState("");
    const [phase,setPhase] = useState("");


    function run(){
      if(localStorage.getItem("flag")===1){
        Navigate("/articles");
      }
    }
    
    run();

   async function handleForm(e){
        e.preventDefault();
        console.log(data);
        const {username, password } = data;
        console.log(username);
        console.log(password);
        const res = await fetch("https://kmitron-server.vercel.app/login", {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
             username,password
          })
        });

        if(res.status===200){
         setIsAuth(true)
            console.log("Suckcessesse");
            localStorage.setItem("flag",1);
            localStorage.setItem("username",username);  
            // this.render();
            Navigate("/articles");
       }
       else if(res.status===201){
            alert("Wrong password");
            localStorage.setItem("flag",0);
       }
       else{
            alert("Invalid user");
            localStorage.setItem("flag",0);

       }

    }

    const handleRegister = async (e) =>{
        e.preventDefault();
        console.log(data);
        const {username, password } = data;
        console.log(username);
        console.log(password);
        const res = await fetch("https://kmitron-server.vercel.app/register", {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
             username,password
          })
        });
        window.alert("Registered!");
    //     if(res.status===200){
    //         console.log("Suckcessesse");
    //         Navigate("/articles");
    //    }
    //    else if(res.status===201){
    //         alert("Wrong password");
    //    }
    //    else{
    //         alert("Invalid user");
    //    }

    }
    function handleInputs(e){
        var name = e.target.name;
        var value = e.target.value;

        setData({...data, [name]:value});
    }
    return (
        <div class="d-flex justify-content-center">
            <div class="card container loginDabba">
              <div class = "">
                <h4 className = "text-center mt-4 authenticationText">AUTHENTICATION</h4>
                <form className="form m-4">
                    <label for="Username">Username</label>
                    <input name = "username" value = {data.username} className="form-control" placeholder="Enter username" onChange={handleInputs} type="text" />
                    <label for="Username">Password</label>
                    <input name = "password" value = {data.password} className="form-control"  placeholder="Enter password" onChange={handleInputs} type="password" />
                </form>
                <form className = "form m-1 d-flex justify-content-center">
                <button type = "submit" onClick = {handleForm} className = "btn btn-sm btn-success m-2">Login</button>
                <button type = "submit" onClick = {handleRegister} className = "btn btn-sm btn-warning m-2" >Register</button>
                </form>
            </div>
            </div>
        </div>)
}


export default Login;