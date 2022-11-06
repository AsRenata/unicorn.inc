import React from 'react';
import "./About.css";
import AboutIMG from "./About.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="first-section">
        <div className="upper-box">
          <div className="first-header">
            <h3>
              we use <br /> our <br /> unicorn <br /> magic
            </h3>
          </div>
          <div className="second-header">
            <h3>
              create <br /> <span>unforgettable</span>
              <br /> experience.
            </h3>
          </div>
          <div className="about-img">
            <img
              src={AboutIMG}
              className="about-img"
              alt="man with unicorn head"
            />
          </div>
        </div>
        <div className="solid-line"></div>
        <div className="second-section">
          <div>
            <h4>about</h4>
            <p>
              Unicorn.inc was established by young,
              <br /> creative and passionate professionals <br /> whose combined
              experience in Marketing
              <br /> and IT industries surplus.
            </p>
          </div>
          <div>
            <h4 className='align-right-header'>
              our <br /> mission <br /> & vission
            </h4>
            <p className='align-right-text'>
              Our core goal is to provide every big and small
              <br /> bussiness simple and fast way to boost the profit by
              <br /> using the most innovative digital marketing tools.
            </p>
          </div>
        </div>
        <div className='quote-box'>
          <p className="quote">
            The only thing that is better than to work with us is to work for
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About