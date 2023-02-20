import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const Footer = () => {
  return (
    <div class="container-fluid bg-dark">
      <p class="text-center footerText">
        Developed by <a href="">Pranav Dhulipala</a>
    </p>
        <nav class="navbar navbar-expand-lg text-center mx-auto">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a
                  class="nav-link footerText"
                  href="www.instagram.com/pranavdhulipala"
                >
                  Instagram <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link footerText"
                  href="www.github.com/pranavdhulipala0"
                >
                  GitHub <span class="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
};

export default Footer;
