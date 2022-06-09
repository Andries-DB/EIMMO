import React from 'react';
import millify from 'millify';
import './Property.css';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import isVoid from '../../../core/helpers/isVoid';
import { getImagePath } from '../../../core/helpers/api';

function Property({
  property: {
    avatar, price, title, amountBedrooms, amountBathrooms, size, id
  }
}) {
  return (
    <div className="card">
      <a href={`search/${id}`} passhref="true">
        <div className="cardContainer">
          <div className="cardImage">
            {!isVoid(avatar) && (
            <img
              src={getImagePath(avatar)}
              alt={title}
            />
            )}
          </div>
          <div className="cardInfo">
            <div className="cardDetails">
              <div className="cardPrice">
                <GoVerified className="verifiedIcon" />
                <h3>
                  €
                  {' '}
                  {millify(price)}
                </h3>
              </div>
            </div>
            <div className="cardRooms">
              {amountBedrooms}
              <FaBed />
              {' '}
              |
              {' '}
              {amountBathrooms}
              <FaBath />
              |
              {'  '}
              {millify(size)}
              <p>
                m
                <sup>2</sup>
              </p>
              <BsGridFill />
            </div>
            <h1>
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </h1>
          </div>
        </div>
      </a>
    </div>

  );
}

export default Property;
