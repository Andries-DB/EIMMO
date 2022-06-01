import { Navigate, useLocation } from 'react-router-dom';
import { AuthRoutes, BasicRoutes } from '../../../core/routing';
import { useAuthContext } from './AuthProvider';

function AuthContainer({ children }) {
  const { auth } = useAuthContext();
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={BasicRoutes.Index}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default AuthContainer;
