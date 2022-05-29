import React from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import useFetch from '../../../../core/hooks/useFetch';
import imageOne from '../../Public/MainSection/ImageSlider/data/images/house-1.jpg';
import Button from '../../Button/Button';
import '../Property.css';

function PropDetail() {
  const { id } = useParams();

  const { data: property } = useFetch(`/immo/${id}`);
  console.log(property);
  return (
    <div className="cardDetail">
      <div className="cardDetail__body">
        <img src={imageOne} alt={property?.title} className="cardDetail__img" />
        <h2 className="cardDetail__title">{property?.title}</h2>
        <div className="cardDetail__Rooms">
          {property?.amountBedrooms}
          <FaBed />
          {' '}
          |
          {' '}
          {property?.amountBathrooms}
          <FaBath />
          |
          {' '}
          {property?.size}
          <p>
            m
            <sup>2</sup>
          </p>
          <BsGridFill />
        </div>
        <h4 className="cardDetail__adress">{property?.adress}</h4>
        <Button
          color="primary"
          type="button"
          className="cardDetail__btn"
        >
          {`${property?.type} this!`}
        </Button>
      </div>
    </div>

  );
}

export default PropDetail;
