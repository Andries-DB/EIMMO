import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBed, FaBath } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { BsGridFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useMutation from '../../../../core/hooks/useMutation';
import useFetch from '../../../../core/hooks/useFetch';
import '../Property.css';

import useTitle from '../../../../core/hooks/useTitle';
import Anchor from '../../Anchor/Anchor';
import isVoid from '../../../../core/helpers/isVoid';
import { getImagePath } from '../../../../core/helpers/api';

function PropDetail() {
  const { id } = useParams();

  const { data: property } = useFetch(`/immo/${id}`);
  const { mutate } = useMutation();
  const { t } = useTranslation();
  useTitle(property?.title);
  const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
  let role = 'CLIENT';
  if (loggedinUser) {
    role = loggedinUser.role;
  }

  const [Statefav, setSatefav] = useState(false);
  const [Statenonfav, setSatefnonfav] = useState(true);
  const handleAdd = () => {
    mutate(`${process.env.REACT_APP_API_URL}/favorite`, {
      method: 'POST',
      data: [{ user_id: loggedinUser.id, immo_id: id }],
      onSuccess: () => {
        setSatefav(!Statefav);
        setSatefnonfav(!Statenonfav);
      },
    });
  };

  const handleDelete = () => {
    mutate(`${process.env.REACT_APP_API_URL}/favorite/${loggedinUser.id}/${id}`, {
      method: 'DeLETE',
      onSuccess: () => {
        setSatefav(!Statefav);
        setSatefnonfav(!Statenonfav);
      },
    });
  };

  return (
    <div className="app">
      <div className="details">
        <div className="big-img">
          {!isVoid(property?.avatar) && (
          <img
            src={getImagePath(property?.avatar)}
            alt={property?.title}
          />
          )}
        </div>
        <div className="box">
          <div className="row">
            <h2>{property?.title}</h2>
            <span>
              €
              {property?.price}
            </span>
          </div>
          <div>
            {role === 'USER' || role === 'IMMO' || role === 'ADMIN' ? property?.adress : <Anchor color="secondary" href="/login">{t('Button.SeeAdress')}</Anchor>}
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
          {role === 'USER' || role === 'IMMO' || role === 'ADMIN' ? (
            <div>
              <button type="button" onClick={handleAdd} hidden={Statefav} className="btn btn-secondary btn-icons">
                <AiOutlineHeart size={25} className="icons" />
                {' '}
              </button>
              <button type="button" onClick={handleDelete} hidden={Statenonfav} className="btn btn-secondary btn-icons">
                {' '}
                <AiFillHeart size={25} className="icons" />
              </button>
            </div>
          ) : ''}

        </div>
      </div>
    </div>

  );
}

export default PropDetail;
