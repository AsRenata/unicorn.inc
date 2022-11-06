import React, { useState, useEffect } from "react";
import "./BackgroundSlider.css";
import imageSlide from "./data";

const BackgroundSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = imageSlide.length;

  const autoScroll = true;
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
    <div className="slider">
      <button className="arrow prev" onClick={prevSlide}></button>
      <button className="arrow next" onClick={nextSlide}></button>
      <div className="prev-container">
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-slash-forward"></i>
        <p className="total-no">3</p>
      </div>
      <div>
        <i class="fa-solid fa-chevron-right"></i>
        <i class="fa-regular fa-slash-forward"></i>
        <p className="total-no">3</p>
      </div>

      {imageSlide.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} />
                <div className="project-slide">
                  <h1 className="project-no">{slide.title}</h1>
                </div>
                <div className="project-no-prev">
                  <button className="prev-btn">{slide.number}</button>
                </div>
                <div className="project-no-next">
                  <button className="next-btn">{slide.number}</button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default BackgroundSlider;
