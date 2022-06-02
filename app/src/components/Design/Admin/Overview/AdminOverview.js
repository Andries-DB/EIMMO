import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GrUserSettings } from 'react-icons/gr';
import useFetch from '../../../../core/hooks/useFetch';
import useMutation from '../../../../core/hooks/useMutation';
import Anchor from '../../Anchor/Anchor';
import './Overview.css';

function AdminOverview() {
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
          Add new Client
        </Anchor>
      </div>
      <div className="overviewAdminClient">

        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>ContactName</th>
            <th>Email</th>
            <th>Role</th>
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
