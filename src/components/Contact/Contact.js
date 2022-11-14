import React from "react";
import "./Contact.css";
import { FaLocationArrow } from "react-icons/fa";
import { BsTelephoneFill, BsChevronUp } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-box">
        <image className="contact-image" />
        <h5>contact</h5>
      </div>
      <div className="info-box">
        <div className="left-box">
          <div className="space">
            <FaLocationArrow className="icon" />
            <a href="https://goo.gl/maps/3gw88hEKH1riFBGL6" target="_blank">
              Unicorn Hall, LITHUANIA
            </a>
          </div>
          <div className="space">
            <BsTelephoneFill className="icon" />
            <a href="tel:+37060001100">+370 600 01 100</a>
          </div>
          <div className="space">
            <HiMail className="icon" />
            <a href="unicorn@inc.com">unicorn@inc.com</a>
          </div>
        </div>
        <div className="right-box">
            <div className="input-box">
              <p>
                <input class="type-name" type="text" placeholder="Name" />
              </p>

              <p>
                <input
                  class="type-email"
                  type="mail"
                  id="email"
                  placeholder="Email"
                />
              </p>
            </div>

            <p>
              <input class="message" type="text" placeholder="Message" />
            </p>

            <button type="submit" className="send">
              Send
            </button>
        </div>
      </div>
      <a className="back-home" href="/">
        <BsChevronUp />
      </a>
      <footer>
        Copyright © UNICORN.INC 2022. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
