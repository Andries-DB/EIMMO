import React from 'react';
import * as yup from 'yup';
import useFetch from '../../../../core/hooks/useFetch';
import useForm from '../../../../core/hooks/useForm';
import useMutation from '../../../../core/hooks/useMutation';
import useTitle from '../../../../core/hooks/useTitle';
import Alert from '../../Alert';
import Button from '../../Button/Button';
import Input from '../../Form/Input';
import Label from '../../Form/Label';

const schema = yup.object().shape({
  name: yup.string().required(),
  contactName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function ProfileDetail() {
  // Basic variables

  const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
  const { id } = loggedinUser;
  // Fetches & Mutations
  const { isLoading, error, mutate } = useMutation();
  const { data: user } = useFetch(`/admin/${id}`);
  useTitle(`Settings ${user?.name}`);

  const defaultData = {
    email: user?.email,
    role: user?.role,
    name: user?.name,
    contactName: user?.contactName
  };

  const handleData = (values) => {
    mutate(`${process.env.REACT_APP_API_URL}/admin/${id}`, {
      method: 'PATCH',
      data: values,
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  const {
    values, errors, handleChange, handleSubmit
  } = useForm(schema, { ...defaultData });

  return (

    <div className="formContainer">
      <form onSubmit={handleSubmit(handleData)}>
        {error && <Alert color="danger">{error}</Alert>}
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder={`Current name: '${defaultData?.name}'`}
          value={values?.name}
          error={errors.name}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="contactName">Contact Name</Label>
        <Input
          type="text"
          id="contactName"
          name="contactName"
          placeholder={`Current contactname: '${defaultData?.contactName}'`}
          value={values.contactName}
          error={errors.contactName}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={`Current email: '${defaultData?.email}'`}
          value={values.email}
          error={errors.email}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="role">Role</Label>
        <Input
          type="text"
          id="role"
          name="role"
          value={defaultData.role}
          error={errors.role}
          disabled
          onChange={handleChange}
        />

        <Button type="submit" disabled={isLoading}>Save</Button>
      </form>
    </div>
  );
}

export default ProfileDetail;
