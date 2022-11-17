import React, { useState, useEffect } from "react";
import "./BackgroundSlider.css";
import imageSlide from "./data";
import { BsSlash } from "react-icons/bs";
import { Link } from "react-router-dom";


const BackgroundSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentSlide].image})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    height: `100%`,
  };
  const slideLength = imageSlide.length;

  const autoScroll = false;
  let slideInterval;
  let intervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
  }, [currentSlide]);
  return (
    <div className="slider" id="our_magic">
      <button className="arrow prev" onClick={prevSlide}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button className="arrow next" onClick={nextSlide}>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      {imageSlide.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="carousel">
                <a href="/project_1">
                  <div style={bgImageStyle}></div>
                </a>
                <div>
                  <button className="prev-btn">
                    {slide.number}
                    <BsSlash />
                    <sub>3</sub>
                  </button>
                </div>
                <div>
                  <button className="next-btn">
                    {slide.number}
                    <BsSlash />
                    <sub>3</sub>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default BackgroundSlider;
