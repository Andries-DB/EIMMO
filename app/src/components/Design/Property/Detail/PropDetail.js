import React from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { FaBed, FaBath } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { BsGridFill } from 'react-icons/bs';
import useFetch from '../../../../core/hooks/useFetch';
import imageOne from '../../Public/MainSection/ImageSlider/data/images/house-1.jpg';
import Button from '../../Button/Button';
import '../Property.css';

import useTitle from '../../../../core/hooks/useTitle';

function PropDetail() {
  const { id } = useParams();

  const { data: property } = useFetch(`/immo/${id}`);
  const { t } = useTranslation();
  useTitle(property?.title);
  return (
    <div className="app">
      <div className="details">
        <div className="big-img">
          <img src={imageOne} alt={property?.title} />
        </div>
        <div className="box">
          <div className="row">
            <h2>{property?.title}</h2>
            <span>
              €
              {property?.price}
            </span>
          </div>
          <div className="cardRooms">
            {property?.amountBedrooms}
            <FaBed />
            {' '}
            |
            {' '}
            {property?.amountBathrooms}
            <FaBath />
            |
            {'  '}
            {property?.size}
            <p>
              m
              <sup>2</sup>
            </p>
            <BsGridFill />
          </div>
          <Button
            color="primary"
            type="button"
            className="btn"
          >
            {`${property?.type} this!`}
          </Button>
        </div>

      </div>
    </div>

  );
}

export default PropDetail;
