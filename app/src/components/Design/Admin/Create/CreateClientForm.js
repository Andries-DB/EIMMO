import React from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useForm from '../../../../core/hooks/useForm';
import useMutation from '../../../../core/hooks/useMutation';
import useTitle from '../../../../core/hooks/useTitle';
import { AdminRoutes } from '../../../../core/routing';
import Button from '../../Button/Button';
import Label from '../../Form/Label';
import './CreateForm.css';
import Input from '../../Form/Input';
import Alert from '../../Alert';

const schema = yup.object().shape({
  name: yup.string().required(),
  contactName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const defaultData = {
  email: '',
  password: '',
  name: '',
  contactName: ''
};

function CreateClientForm() {
  const { t } = useTranslation();
  useTitle(t('Titles.AddClient'));
  const { isLoading, error, mutate } = useMutation();
  const navigate = useNavigate();

  const handleData = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/admin`, {
      method: 'POST',
      data,
      onSuccess: () => {
        navigate(AdminRoutes.Dash);
      },
    });
  };

  const {
    values, errors, handleChange, handleSubmit
  } = useForm(schema, { ...defaultData });

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(handleData)} noValidate>
        {error && <Alert color="danger">{error}</Alert>}
        <Label htmlFor="name">{t('Form.Name')}</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={values.name}
          error={errors.name}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="contactName">{t('Form.ContactName')}</Label>
        <Input
          type="text"
          id="contactName"
          name="contactName"
          placeholder="Your contactName.."
          value={values.contactName}
          error={errors.contactName}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="email">{t('Form.Email')}</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          value={values.email}
          error={errors.email}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="password">{t('Form.Password')}</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
          value={values.password}
          error={errors.password}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Button type="submit" disabled={isLoading}>{t('Button.Add')}</Button>
      </form>
    </div>
  );
}

export default CreateClientForm;
