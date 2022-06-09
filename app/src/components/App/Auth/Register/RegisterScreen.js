/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from 'react-i18next';
import './RegisterScreen.css';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../../../core/hooks/useMutation';
import useTitle from '../../../../core/hooks/useTitle';
import Button from '../../../Design/Button/Button';
import useForm from '../../../../core/hooks/useForm';
import Label from '../../../Design/Form/Label';
import Input from '../../../Design/Form/Input';
import Alert from '../../../Design/Alert';
import { AuthRoutes, } from '../../../../core/routing';
import NavBar from '../../../Design/NavBar/NavBar';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  contactName: yup.string().required(),

});

const defaultData = {
  email: '',
  password: '',
  name: '',
  contactName: '',
};

function RegisterScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();
  useTitle(t('Titles.Register'));

  const {
    values, errors, handleChange, handleSubmit
  } = useForm(schema, { ...defaultData });

  const handleData = (values) => {
    mutate(`${process.env.REACT_APP_API_URL}/register`, {
      method: 'POST',
      data: values,
      onSuccess: () => {
        navigate(AuthRoutes.Login);
      },
    });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="mainContainer">
          <h2 className="welcomeText">{t('LoginScreen.RegisterTitle')}</h2>
          <form className="formLogin" onSubmit={handleSubmit(handleData)} noValidate>
            {error && <Alert color="danger">{error}</Alert>}

            <Label htmlFor="email">{t('LoginScreen.Register.Email')}</Label>
            <Input
              className="inputLogin"
              name="email"
              value={values.email}
              error={errors.email}
              disabled={isLoading}
              onChange={handleChange}
              placeholder={t('LoginScreen.Register.EmailPlaceholder')}
            />

            <Label htmlFor="name">{t('LoginScreen.Register.name')}</Label>
            <Input
              className="inputLogin"
              name="name"
              value={values.name}
              error={errors.name}
              disabled={isLoading}
              onChange={handleChange}
              placeholder={t('LoginScreen.Register.namePlaceholder')}
            />

            <Label htmlFor="contactName">{t('LoginScreen.Register.contact')}</Label>
            <Input
              className="inputLogin"
              name="contactName"
              value={values.contactName}
              error={errors.contactName}
              disabled={isLoading}
              onChange={handleChange}
              placeholder={t('LoginScreen.Register.contactPlaceholder')}
            />

            <Label htmlFor="password">{t('LoginScreen.Register.Passw')}</Label>
            <Input
              className="inputLogin"
              placeholder={t('LoginScreen.Register.PasswPlaceholder')}
              name="password"
              type="password"
              value={values.password}
              error={errors.password}
              disabled={isLoading}
              onChange={handleChange}
            />

            <br></br>
            <Button type="submit" disabled={isLoading} className="primary">
              {t('Button.Register')}
            </Button>
          </form>
          <div className="loginContainer">
            <div>
              <h5>{t('LoginScreen.Register.AlreadyAcc')}</h5>
            </div>
            <div>
              <a href="/login" className="loginButton">{t('Button.Login')}</a>
            </div>

          </div>

        </div>
      </div>
    </>

  );
}

export default RegisterScreen;
