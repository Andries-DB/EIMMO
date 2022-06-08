import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import useForm from '../../../../core/hooks/useForm';
import useMutation from '../../../../core/hooks/useMutation';
import { AdminRoutes, MakelaarRoutes } from '../../../../core/routing';
import Alert from '../../Alert';
import Button from '../../Button/Button';
import Input from '../../Form/Input';
import Label from '../../Form/Label';
import './CreateForm.css';

const schema = yup.object().shape({
  type: yup.string().required(),
  title: yup.string().required(),
  price: yup.number().required(),
  adress: yup.string().required(),
  size: yup.number().required(),
  amountBathrooms: yup.number().required(),
  amountBedrooms: yup.number().required(),
  garden: yup.bool().required(),
  src: yup.string()
});

const defaultData = {
  type: '',
  title: '',
  price: '',
  adress: '',
  size: '',
  amountBathrooms: '',
  amountBedrooms: '',
  garden: '',
  src: ''
};

function AddForm() {
  const { isLoading, error, mutate } = useMutation();
  const navigate = useNavigate();
  const handleData = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/immo`, {
      method: 'POST',
      data,
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
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
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
          placeholder="Type (buy/rent)"
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
          placeholder="The price.."
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
          placeholder="e.g. given: Kortrijksesteenweg 786 | 9000 - Gent.."
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
          placeholder="Size.."
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
          placeholder="Amount of bedrooms.."
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
          placeholder="Amount of bathrooms.."
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
          placeholder="Garden? (true/false)"
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
          placeholder="Select a photo"
          value={values.src}
          error={errors.src}
          disabled={isLoading}
          onChange={handleChange}
        />

        <Button type="submit" disabled={isLoading}>Add</Button>
      </form>
    </div>
  );
}

export default AddForm;