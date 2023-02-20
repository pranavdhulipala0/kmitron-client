import React from 'react'
import "./App.css"
import FullBlog from './FullBlog';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import { Link } from 'react-router-dom';

const Card = ({ props }) => {
  // <Routes>
  //   <Route path={`/articles/${props.heading}`} element={<Login />} />
  // </Routes>
  let navigate = useNavigate();
  // const show = () => {
  //  ;
  // //   <Routes>
  // //   <Route path={`/articles/${props.heading}`} element={<Login />} />
  // // </Routes>
  //   navigate(path);
  // }

  function show(){
    navigate("/viewblog",{state:{username:props.username, heading:props.heading, article: props.article, image: props.coverArt}});
  }

  return (
    <div class="card dabba" id="dabba" onClick = {show}>
      <img className="card-img cardImage" src={props.coverArt} alt="not Found" />
      <div className="headingText card-header">
        <h3>{props.heading}</h3>
      </div>
      <div className="card-body">
        <h5 className="articleText">{props.article}</h5>
        {/* <div class="card-footer">              <button className="btn btn-warning btn-sm card-footer">Read more...</button>
        </div> */}

      </div>
    </div>
  )
}

export default Card