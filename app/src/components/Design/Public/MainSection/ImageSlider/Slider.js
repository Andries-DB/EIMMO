import React, { useState } from 'react';
import millify from 'millify';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import isVoid from '../../../../../core/helpers/isVoid';
import Anchor from '../../../Anchor/Anchor';
import useFetch from '../../../../../core/hooks/useFetch';
import './Slider.css';
import { ImmoRoutes } from '../../../../../core/routing';
import { getImagePath } from '../../../../../core/helpers/api';

function Slider() {
  const { t } = useTranslation();
  const [House, setHouse] = useState(0);
  const { data: properties } = useFetch('/immo');
  const length = properties?.length;

  const nextSlide = () => {
    setHouse(House === length - 1 ? 0 : House + 1);
  };

  const prevSlide = () => {
    setHouse(House === 0 ? length - 1 : House - 1);
  };
  return (
    <div className="mainWrapper">
      {properties?.map((slide, index) => (
        <div className="mainSlide" id={index}>
          {index === House && (
          <div className="mainSlider">
            {!isVoid(slide.avatar) && (
            <img
              className="mainImage"
              src={getImagePath(slide.avatar)}
              alt={slide.title}
            />
            )}
            <div className="mainContent">
              <h1>{slide.title}</h1>
              <p>{millify(slide.price)}</p>
              <Anchor
                color="primary"
                href={ImmoRoutes.Search}
              >
                {t('Button.Search')}
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
