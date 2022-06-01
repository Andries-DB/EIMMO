import millify from 'millify';
import React from 'react';
import { FaBath, FaBed, FaTrash, } from 'react-icons/fa';
import useFetch from '../../../../core/hooks/useFetch';

import Loading from '../../Loading/Loading';
import Alert from '../../Alert';
import useMutation from '../../../../core/hooks/useMutation';

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
    <div className="overviewAdminImmo">
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
              <button type="button" className="btn-primary" onClick={() => { handleClick(property.id); }}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}

      </table>
    </div>
  );
}

export default PropertiesOverview;
