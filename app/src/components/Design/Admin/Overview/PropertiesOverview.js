import millify from 'millify';
import React from 'react';
import { FaBath, FaBed, FaTrash, } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { AiOutlineUserAdd } from 'react-icons/ai';
import useFetch from '../../../../core/hooks/useFetch';

import Loading from '../../Loading/Loading';
import Alert from '../../Alert';
import useMutation from '../../../../core/hooks/useMutation';
import Anchor from '../../Anchor/Anchor';

function PropertiesOverview() {
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
          Add new House
        </Anchor>
      </div>
      <div className="overviewAdmin">
        <table>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Title</th>
            <th>Price</th>
            <th>Adress</th>
            <th>Size</th>
            <th>Amount of bedrooms</th>
            <th>Amount of bathrooms</th>
            <th>Garden</th>
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
