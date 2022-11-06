import React, { useState, useRef, useEffect } from "react";
import { links } from "./data";
import logo from "./logo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null); 
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={click ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            <li className="nav-item">
              <div className="input">
                <input
                  className="search-input"
                  type="input"
                  placeholder="Search UNICORN.INC..."
                />
                <i className="fas fa-magnifying-glass"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
