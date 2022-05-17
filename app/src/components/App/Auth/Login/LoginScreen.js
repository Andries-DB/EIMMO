import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import './LoginScreen.css';
import { useForm } from '../../../../core/hooks/useForm';
import { useMutation } from '../../../../core/hooks/useMutation';
import Anchor from '../../../Design/Anchor/Anchor';
import useTitle from '../../../../core/hooks/useTitle';
import { useAuthContext } from '../AuthProvider';
import Button from '../../../Design/Button/Button';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function LoginScreen() {
  const { t } = useTranslation();
  const { login } = useAuthContext();
  const { isLoading, error, mutate } = useMutation();
  useTitle(t('LoginScreen.Title'));

  const {
    values, errors, handleChange, handleSubmit
  } = useForm(schema, {
    email: '',
    password: '',
  });

  const handleData = (values) => {
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
        <form className="formLogin">
          <form className="formEmail">
            <label htmlFor="email">{t('LoginScreen.Login.Email')}</label>
            <input
              className="inputLogin"
              name="email"
              placeholder={t('LoginScreen.Login.EmailPlaceholder')}
              error={errors.email}
              disabled={isLoading}
              /* onChange={handleChange} */
            />
          </form>
          <form className="formPassword">
            <label htmlFor="password">{t('LoginScreen.Login.Passw')}</label>
            <input
              className="inputLogin"
              placeholder={t('LoginScreen.Login.PasswPlaceholder')}
              name="password"
              type="password"
              error={errors.password}
              disabled={isLoading}
              /* onChange={handleChange} */
            />
          </form>
          <Button type="submit">
            {t('Button.Login')}
          </Button>
        </form>
      </div>

    </div>

  );
}

export default LoginScreen;
