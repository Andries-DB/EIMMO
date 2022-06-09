import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import useFetch from '../../../../core/hooks/useFetch';
import useForm from '../../../../core/hooks/useForm';
import useMutation from '../../../../core/hooks/useMutation';
import useTitle from '../../../../core/hooks/useTitle';
import { MakelaarRoutes } from '../../../../core/routing';
import Alert from '../../Alert';
import Button from '../../Button/Button';
import Input from '../../Form/Input';
import Label from '../../Form/Label';
import FileInput from '../../Form/FileInput';

const schema = yup.object().shape({
  type: yup.string().required(),
  title: yup.string().required(),
  price: yup.number().required(),
  adress: yup.string().required(),
  size: yup.number().required(),
  amountBathrooms: yup.number().required(),
  amountBedrooms: yup.number().required(),
  garden: yup.bool().required(),
  avatar: yup.string()
});

function ImmoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // Fetches & Mutations
  const { isLoading, error, mutate } = useMutation();
  const { data } = useFetch(`/immo/${id}`);

  // Setting the title
  useTitle(`Edit ${data?.title}`);

  // Default data in the form
  const defaultData = {
    type: data?.type,
    title: data?.title,
    price: data?.price,
    adress: data?.adress,
    size: data?.size,
    amountBathrooms: data?.amountBathrooms,
    amountBedrooms: data?.amountBedrooms,
    garden: data?.garden,
    avatar: data?.avatar
  };

  const handleData = (values) => {
    mutate(`${process.env.REACT_APP_API_URL}/immo/${id}`, {
      method: 'PATCH',
      data: values,
      multipart: true,
      onSuccess: () => {
        navigate(MakelaarRoutes.Dash);
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
        <Label htmlFor="title">{t('Form.Title')}</Label>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder={`Current title: '${defaultData?.title}'`}
          value={values.title}
          error={errors.title}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="type">{t('Form.Type')}</Label>
        <Input
          type="text"
          id="type"
          name="type"
          placeholder={`Current type: '${defaultData?.type}'`}
          value={values.type}
          error={errors.type}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="price">{t('Form.Price')}</Label>
        <Input
          type="number"
          id="price"
          name="price"
          placeholder={`Current price: '${defaultData?.price}'`}
          value={values.price}
          error={errors.price}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="adress">{t('Form.Adress')}</Label>
        <Input
          type="text"
          id="adress"
          name="adress"
          placeholder={`Current adress: '${defaultData?.adress}'`}
          value={values.adress}
          error={errors.adress}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="size">{t('Form.Size')}</Label>
        <Input
          type="number"
          id="size"
          name="size"
          placeholder={`Current size: '${defaultData?.size}m²'`}
          value={values.size}
          error={errors.size}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="amountBedrooms">{t('Form.Bedrooms')}</Label>
        <Input
          type="number"
          id="amountBedrooms"
          name="amountBedrooms"
          placeholder={`Current amount of bathrooms: '${defaultData?.amountBedrooms}'`}
          value={values.amountBedrooms}
          error={errors.amountBedrooms}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="amountBathrooms">{t('Form.Bathrooms')}</Label>
        <Input
          type="text"
          id="amountBathrooms"
          name="amountBathrooms"
          placeholder={`Current amount of bathrooms: '${defaultData?.amountBathrooms}'`}
          value={values.amountBathrooms}
          error={errors.amountBathrooms}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="garden">{t('Form.Garden')}</Label>
        <Input
          type="text"
          id="garden"
          name="garden"
          placeholder={`Current garden present: '${defaultData?.garden}'`}
          value={values.garden}
          error={errors.garden}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Label htmlFor="avatar">{t('Form.Photo')}</Label>
        <FileInput
          name="avatar"
          value={values.avatar}
          disabled={isLoading}
          onChange={handleChange}
          error={errors.avatar}
        />
        <Button type="submit" disabled={isLoading}>{t('Button.Save')}</Button>
      </form>
    </div>
  );
}

export default ImmoDetail;
