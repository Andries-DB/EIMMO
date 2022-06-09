import millify from 'millify';
import React from 'react';
import { FaBath, FaBed, FaTrash, } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import useFetch from '../../../../core/hooks/useFetch';
import useTitle from '../../../../core/hooks/useTitle';
import useMutation from '../../../../core/hooks/useMutation';
import Anchor from '../../Anchor/Anchor';

function PropertiesOverview() {
  const { t } = useTranslation();
  useTitle(t('Titles.HouseDashboard'));
  const { mutate } = useMutation();
  const { data: properties } = useFetch('/immo');

  const handleClick = (id) => {
    mutate(`${process.env.REACT_APP_API_URL}/immo/${id}`, {
      method: 'DELETE',
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  return (
    <>
      <div className="btn-add">
        <Anchor href="/admin/immo/add">
          <AiOutlineUserAdd className="btn-add-icon" />
          {t('Button.AddHouse')}
        </Anchor>
      </div>
      <div className="overviewAdmin">
        <table>
          <tr>
            <th>{t('Form.ID')}</th>
            <th>{t('Form.Type')}</th>
            <th>{t('Form.Title')}</th>
            <th>{t('Form.Price')}</th>
            <th>{t('Form.Adress')}</th>
            <th>{t('Form.Size')}</th>
            <th>{t('Form.Bedrooms')}</th>
            <th>{t('Form.Bathrooms')}</th>
            <th>{t('Form.Garden')}</th>
            <th> </th>
          </tr>
          {properties?.map((property) => (
            <tr>
              <td>{property.id}</td>
              <td>{property.type}</td>
              <td>{property.title}</td>
              <td>
                €
                {millify(property.price)}
                {' '}
                (
                {' '}
                €
                {property.price}
                {' '}
                )
              </td>
              <td>{property.adress}</td>
              <td>
                {property.size}
                {' '}
                m
                {' '}
                <sup>2</sup>
              </td>
              <td>
                <FaBed />
                {' '}
                {property.amountBedrooms}
              </td>
              <td>
                <FaBath />
                {' '}
                {property.amountBathrooms}
              </td>
              <td>
                {property.garden ? 'Garden' : 'No Garden'}
              </td>
              <td>
                <div className="clientButtons">
                  <button type="button" className="btn-primary" onClick={() => { handleClick(property.id); }}>
                    <FaTrash className="icon" />
                  </button>
                  <Anchor href={`${property.id}`}>
                    <GrUserSettings className="icon" />
                  </Anchor>

                </div>

              </td>
            </tr>
          ))}

        </table>
      </div>
    </>

  );
}

export default PropertiesOverview;
