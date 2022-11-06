import React from "react";
import "./Home.css";
import Flames from "./Flames.png";

const Home = () => {
  return (
    <div className="container-hero">
      <div className="header-container">
        <h1>unicorn</h1>
      </div>
      <div className="hero-items">
        <h2>unicorn design agency</h2>
        <div className="icon-box">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:unicorn@inc.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="hero-img">
        <img src={Flames} className="flames" />
      </div>
    </div>
  );
};

export default Home;
