import React, { useState } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import Anchor from '../../../Anchor/Anchor';

import Button from '../../../Button/Button';
import { SliderData } from './data/ImageSlider';
import './Slider.css';

function Slider() {
  const [House, setHouse] = useState(0);
  const length = 3;

  const nextSlide = () => {
    setHouse(House === length - 1 ? 0 : House + 1);
  };

  const prevSlide = () => {
    setHouse(House === 0 ? length - 1 : House - 1);
  };
  return (
    <div className="mainWrapper">
      {SliderData.map((slide, index) => (
        <div className="mainSlide" id={index}>
          {index === House && (
          <div className="mainSlider">
            <img className="mainImage" alt={slide.alt} src={slide.image}></img>
            <div className="mainContent">
              <h1>{slide.title}</h1>
              <p>{slide.prijs}</p>
              <Anchor
                color="primary"
                href={slide.path}
              >
                {slide.label}
                <IoMdArrowRoundForward className="arrowDetails" />
              </Anchor>
            </div>
          </div>
          )}

        </div>
      ))}
      <div className="sliderButtons">
        <IoArrowBack className="arrowButtons" onClick={prevSlide} />
        <IoArrowForward className="arrowButtons" onClick={nextSlide} />
      </div>

    </div>
  );
}

export default Slider;
