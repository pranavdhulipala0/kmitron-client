import React from 'react'
import { useLocation } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"


const FullBlog = () => {
  const location = useLocation();
  const { username, heading, article, image } = location.state;
  if(localStorage.getItem("flag")==1){
  return (
    <div className="container container-body">
      <img className="img-fluid img-thumbnail blogImage" src={image} alt="Could not load image..." />
      <div className=" fullDabba">
        <h1 className = "articleHeading">{heading}</h1>
        <i><h6 >Written by {username}</h6></i>
        <br/>
        <p className = "articleFullText">{article}</p>
      </div>

    </div>
  )
  }
  else{
    return(
      <div className = "container container-body">
        <p>You are not logged in...</p>
      </div>
    )
  }
}

export default FullBlog