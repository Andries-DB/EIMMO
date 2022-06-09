import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GrUserSettings } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';
import useTitle from '../../../../core/hooks/useTitle';
import useFetch from '../../../../core/hooks/useFetch';
import useMutation from '../../../../core/hooks/useMutation';
import Anchor from '../../Anchor/Anchor';
import './Overview.css';

function AdminOverview() {
  const { t } = useTranslation();
  useTitle(t('Titles.ClientDashboard'));
  const { mutate } = useMutation();
  const { data: users } = useFetch('/admin');
  const handleClick = (id) => {
    mutate(`${process.env.REACT_APP_API_URL}/admin/${id}`, {
      method: 'DELETE',
      onSuccess: () => {
        window.location.reload();
      },
    });
  };
  return (
    <>
      <div className="btn-add">
        <Anchor href="/admin/dashboard/add">
          <AiOutlineUserAdd className="btn-add-icon" />
          {t('Button.AddClient')}
        </Anchor>
      </div>
      <div className="overviewAdmin">

        <table>
          <tr>
            <th>{t('Form.ID')}</th>
            <th>{t('Form.Name')}</th>
            <th>{t('Form.ContactName')}</th>
            <th>{t('Form.Email')}</th>
            <th>{t('Form.Role')}</th>
            <th> </th>
          </tr>
          {users?.map((user) => (

            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.contactName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <div className="clientButtons">
                <button type="button" className="btn-primary" onClick={() => { handleClick(user.id); }}>
                  <FaTrash className="icon" />
                </button>
                <Anchor href={`dashboard/client/${user.id}`}>
                  <GrUserSettings className="icon" />
                </Anchor>
              </div>

            </tr>

          ))}

        </table>
      </div>
    </>

  );
}

export default AdminOverview;
