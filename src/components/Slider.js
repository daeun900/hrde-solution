import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const SliderContainer = styled.div`
  position: relative;
  margin: 100px 0;
  .title {
    span {
      font-size: 20px;
      line-height: 30px;
      font-weight: 600;
      color: #0057ff;
      display: block;
    }
    strong {
      font-size: 40px;
      line-height: 60px;
    }
  }

  .btn_wrap {
    position: absolute;
    right: 0;
    top: 100px;
    display: flex;

    .btn {
      cursor: pointer;
      color: #0057FF;

      &.disabled {
        color: #767676;
        pointer-events: none;
      }
    }
  }

  .slides-container {
    overflow: hidden;
    width: 100%;
    position: relative;

    .slides-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
      gap: 20px;
      margin: 50px 0;

      .slide {
        min-width: calc((100% / 3) - 20px);
        height: 180px;
        background-color: #f8f8f8;
        border-radius: 30px;
        padding: 40px;
        font-size: 20px;
        line-height: 30px;
        box-sizing: border-box;

        b {
          color: red;
        }
      }
    }
  }
`;

const Slider = ({ title, subtitle, slides, slidesToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + slidesToShow >= slides.length ? 0 : prevIndex + 1
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); 
  }, [slides.length, slidesToShow]);

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= slides.length ? 0 : prevIndex + 1
    );
    startAutoSlide();
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - slidesToShow : prevIndex - 1
    );
    startAutoSlide();
  };

  return (
    <SliderContainer>
      <div className="title">
        <span>{title}</span>
        <strong dangerouslySetInnerHTML={{ __html: subtitle }}></strong>
      </div>
      <div className="btn_wrap">
        <div
          className={`btn prev ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
          role="button"
          aria-label="Previous Slide"
          tabIndex="0"
        >
          <ArrowCircleLeft size={44} weight="thin" />
        </div>
        <div
          className={`btn next ${
            currentIndex + slidesToShow >= slides.length ? "disabled" : ""
          }`}
          onClick={handleNext}
          role="button"
          aria-label="Next Slide"
          tabIndex="0"
        >
          <ArrowCircleRight size={44} weight="thin" />
        </div>
      </div>
      <div className="slides-container">
        <div
          className="slides-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className="slide"
              key={index}
              dangerouslySetInnerHTML={{ __html: slide }}
            ></div>
          ))}
        </div>
      </div>
    </SliderContainer>
  );
};

export default Slider;
