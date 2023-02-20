import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import { useState } from "react";

const SubmitBlog = () => {
  const [data, setData] = useState({
    username: "",
    heading: "",
    coverArt: "",
    article: "",
    preview: "",
  });
  let name, value;

  // async function handleForm(event) {
  //   event.preventDefault();
  //   const { heading, article, coverArt } = event.target.elements;
  //   console.log("Heading: " + heading.value);
  //   console.log("Test");
  // }

  function submitButton(){
    document.getElementById("submitButton").innerText = "Submitted!";
  }
  const handleForm = async (e) => {
    e.preventDefault();
    submitButton();

    const { username, heading, coverArt, article} = data;

    const res = await fetch("https://kmitron-server.vercel.app/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username:localStorage.getItem("username"),
        heading,
        coverArt,
        article,
      }),
    });

    const d = await res.json();
    // if(d.status === 422 || d){
    //   window.alert("Submitted!")
    //   console.log("Submitted");
    // }
    // else{
    //   window.alert("Failed");
    //   console.log("Failed");

    // }
  };

  function handleInputs(e) {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  }

  if (localStorage.getItem("flag") == 1) {
    return (
      <div class="container">
        <br />
        <form
          // action="http://localhost:3002/send"
          method="POST"
        >
          {/* <div class="form-group">
            <label for="exampleFormControlInput1">Username</label>
            <input
              type="text"
              class="form-control"
              name="username"
              id="exampleFormControlInput1"
              placeholder="Enter your username"
              value={data.username}
              onChange={handleInputs}
            />
          </div>
          <br /> */}
          <div class="form-group">
            <label for="exampleFormControlInput1">Heading</label>
            <input
              type="text"
              class="form-control"
              name="heading"
              id="exampleFormControlInput1"
              value={data.heading}
              placeholder="Heading"
              onChange={handleInputs}
            />
          </div>
          <br />
          <div class="form-group">
            <label for="exampleFormControlInput1">Cover Art Link: </label>
            <input
              type="text"
              class="form-control"
              name="coverArt"
              id="exampleFormControlInput1"
              value={data.coverArt}
              placeholder="Heading"
              onChange={handleInputs}
            />
          </div>
          {/* <br /> */}

          {/* <div class="form-group">
            <label for="exampleFormControlTextarea1">Preview Text</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="preview"
              rows="3"
              value={data.preview}
              placeholder="Enter preview text"
              onChange={handleInputs}
            ></textarea>
          </div> */}
          <br />

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Article</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="article"
              rows="3"
              value={data.article}
              placeholder="Enter your article"
              onChange={handleInputs}
            ></textarea>
          </div>
          <br />
          <button
            class="btn btn-sm btn-outline-dark"
            type="submit"
            value="Submit"
            id="submitButton"
            onClick={handleForm}
          >Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p className = "text-center">You are not logged in!</p>
      </div>
    );
  }
};

export default SubmitBlog;
