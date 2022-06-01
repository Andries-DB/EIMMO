import React from 'react';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../../../core/hooks/useMutation';
import { AdminRoutes } from '../../../../core/routing';
import Button from '../../Button/Button';
import './CreateForm.css';

function CreateClientForm() {
  const { mutate } = useMutation();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/admin`, {
      method: 'POST',
      data,
      onSuccess: () => {
        navigate(AdminRoutes.Dash);
      },
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={() => handleSubmit()} noValidate>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label htmlFor="contactName">Contact Name</label>
        <input type="text" id="contactName" name="contactName" placeholder="Your contactName.." />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email.." />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Your password.." />

        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default CreateClientForm;
