import React from 'react'
import Navbar from './Navbar'
import Card from './Card';
import {useState} from 'react';
import Footer from './Footer';
import { useEffect } from 'react';
const Articles = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
  const getMyData =  async ()=>{
    let res = await fetch("https://kmitron-server.vercel.app/getData");
    res = await res.json();
    setData(res);
  };

  getMyData();
  
},[])
  // window.onload = getMyData;

  // useEffect(()=>{
  //   getMyData();
  // },[])

  if(localStorage.getItem("flag")==1){
    return (
      <div className = "container articles">
  
        {data.length>0?(data.map((x) => <Card props = {x}/>))
        :(<p>No articles yet...</p>)}
  
      </div>
    )
  }
  else{
    return(
      <div>
        <p className = "text-center d-flex justify-content-center">You are not logged in!</p>
      </div>
    )
  }
  
}

export default Articles