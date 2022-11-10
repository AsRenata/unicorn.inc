import React, {useState, useEffect} from "react";
import "./Team.css";
import {
  BsFillChatRightQuoteFill,
  BsFillChatLeftQuoteFill,
} from "react-icons/bs";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-header-container">
        <div className="header-text">
          <BsFillChatRightQuoteFill />
          <p>
            We offer perfect
            <br /> hiring models for your
            <br /> project requirements
          </p>
        </div>
        <div className="team-image"></div>
        <div>
          <BsFillChatLeftQuoteFill />
          <p>
            Our highly qualified
            <br /> and skilled team
            <br /> are here to help
          </p>
        </div>
      </div>
      <div className="team-content">
          <button className="ceo box">ceo</button>
          <button className="art box">art director</button>
          <button className="designer1 box">designer</button>
          <button className="designer2 box">designer</button>
          <button className="designer3 box">designer</button>
          <button className="account box">account manager</button>
          <button className="accounts box">acounts</button>
          <button className="work-with box">work with us</button>
          </div>
    </div>
  );
};

export default Team;
