import React from 'react';
import CreateClientForm from '../../../../Design/Admin/Create/CreateClientForm';
import NavBar from '../../../../Design/NavBar/Admin/NavBar';

function AddClient() {
  return (
    <div>
      <NavBar />
      <CreateClientForm />
    </div>
  );
}

export default AddClient;
