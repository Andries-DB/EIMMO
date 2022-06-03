import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import useFetch from '../../../../core/hooks/useFetch';
import useForm from '../../../../core/hooks/useForm';
import useMutation from '../../../../core/hooks/useMutation';
import useTitle from '../../../../core/hooks/useTitle';
import { AdminRoutes } from '../../../../core/routing';
import Alert from '../../Alert';
import Button from '../../Button/Button';
import Input from '../../Form/Input';
import Label from '../../Form/Label';

const schema = yup.object().shape({
  type: yup.string().required(),
  title: yup.string().required(),
  price: yup.number().required(),
  adress: yup.string().required(),
  size: yup.number().required(),
  amountBathrooms: yup.number().required(),
  amountBedrooms: yup.number().required(),
  garden: yup.bool().required(),
  src: yup.string().required()
});

function SettingsHouseForm() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    src: data?.src
  };

  const handleData = (values) => {
    mutate(`${process.env.REACT_APP_API_URL}/immo/${id}`, {
      method: 'PATCH',
      data: values,
      onSuccess: () => {
        navigate(AdminRoutes.HouseOverview);
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
        <Label htmlFor="title">Title</Label>
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

        <Label htmlFor="type">Type</Label>
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

        <Label htmlFor="price">Price</Label>
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

        <Label htmlFor="adress">Adress</Label>
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

        <Label htmlFor="size">Size</Label>
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

        <Label htmlFor="amountBedrooms">Bedrooms</Label>
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

        <Label htmlFor="amountBathrooms">Bathrooms</Label>
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

        <Label htmlFor="garden">Garden</Label>
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

        <Label htmlFor="src">Photo</Label>
        <Input
          type="file"
          id="src"
          name="src"
          placeholder={`Current Photo: '${defaultData?.src}'`}
          value={values.src}
          error={errors.src}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Button type="submit" disabled={isLoading}>Save</Button>
      </form>
    </div>
  );
}

export default SettingsHouseForm;
