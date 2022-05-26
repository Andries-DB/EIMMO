import { useTranslation } from 'react-i18next';
import './LoginScreen.css';
import * as yup from 'yup';
import { useMutation } from '../../../../core/hooks/useMutation';
import Anchor from '../../../Design/Anchor/Anchor';
import useTitle from '../../../../core/hooks/useTitle';
import { useAuthContext } from '../AuthProvider';
import Button from '../../../Design/Button/Button';
import useForm from '../../../../core/hooks/useForm';

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
  const { login } = useAuthContext();
  const { isLoading, error, mutate } = useMutation();
  useTitle(t('LoginScreen.Title'));

  const {
    values, errors, handleChange, handleSubmit
  } = useForm(schema, { ...defaultData, });

  const handleData = (e, values) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      data: values,
      onSuccess: (data) => {
        login(data);
      },
    });
  };

  return (
    <div className="container">
      <div>
        <Anchor
          className="anchorGoBack"
          href="/search"
          color="secondary"
        >
          {t('Button.GoBack')}
        </Anchor>
      </div>

      <div className="mainContainer">
        <h2 className="welcomeText">{t('LoginScreen.Title')}</h2>
        <form className="formLogin" onSubmit={handleData} noValidate>
          <div className="formEmail">
            <label htmlFor="email">{t('LoginScreen.Login.Email')}</label>
            <input
              className="inputLogin"
              name="email"
              placeholder={t('LoginScreen.Login.EmailPlaceholder')}
            />
          </div>
          <div className="formPassword">
            <label htmlFor="password">{t('LoginScreen.Login.Passw')}</label>
            <input
              className="inputLogin"
              placeholder={t('LoginScreen.Login.PasswPlaceholder')}
              name="password"
              type="password"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {t('Button.Login')}
          </Button>
        </form>
      </div>

    </div>

  );
}

export default LoginScreen;
