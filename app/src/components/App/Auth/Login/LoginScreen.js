/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from 'react-i18next';
import './LoginScreen.css';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../../../core/hooks/useMutation';
import Anchor from '../../../Design/Anchor/Anchor';
import useTitle from '../../../../core/hooks/useTitle';
import { useAuthContext } from '../AuthProvider';
import Button from '../../../Design/Button/Button';
import useForm from '../../../../core/hooks/useForm';
import Label from '../../../Design/Form/Label';
import Input from '../../../Design/Form/Input';
import Alert from '../../../Design/Alert';
import {
  AdminRoutes, BasicRoutes, ImmoRoutes, MakelaarRoutes
} from '../../../../core/routing';
import NavBar from '../../../Design/NavBar/NavBar';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const defaultData = {
  email: '',
  password: '',
};

function LoginScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { isLoading, error, mutate } = useMutation();
  useTitle(t('LoginScreen.Title'));

  const {
    values, errors, handleChange, handleSubmit
  } = useForm(schema, { ...defaultData });

  const handleData = (values) => {
    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      data: values,
      onSuccess: (data) => {
        login(data);
        if (data.user.role === 'ADMIN') {
          navigate(AdminRoutes.Dash);
        } else if (data.user.role === 'IMMO') {
          navigate(MakelaarRoutes.Dash);
        } else { navigate(ImmoRoutes.Search); }

        // navigate(BasicRoutes.Index);
      },
    });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="mainContainer">
          <h2 className="welcomeText">{t('LoginScreen.Title')}</h2>
          <form className="formLogin" onSubmit={handleSubmit(handleData)} noValidate>
            {error && <Alert color="danger">{error}</Alert>}
            <Label htmlFor="email">{t('LoginScreen.Login.Email')}</Label>
            <Input
              className="inputLogin"
              name="email"
              value={values.email}
              error={errors.email}
              disabled={isLoading}
              onChange={handleChange}
              placeholder={t('LoginScreen.Login.EmailPlaceholder')}
            />
            <Label htmlFor="password">{t('LoginScreen.Login.Passw')}</Label>
            <Input
              className="inputLogin"
              placeholder={t('LoginScreen.Login.PasswPlaceholder')}
              name="password"
              type="password"
              value={values.password}
              error={errors.password}
              disabled={isLoading}
              onChange={handleChange}
            />
            <Button type="submit" disabled={isLoading} className="primary">
              {t('Button.Login')}
            </Button>
          </form>
          <div>
            <h5>Don't have an account yet?</h5>
          </div>
          <a href="/register" className="registerButton">Register</a>

        </div>
      </div>
    </>

  );
}

export default LoginScreen;
