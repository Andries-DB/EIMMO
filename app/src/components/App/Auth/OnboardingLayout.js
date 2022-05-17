import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from './AuthProvider';

function OnboardingLayout() {
  const { auth } = useAuthContext();
  const location = useLocation();

  if (!auth) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  // check if a previous path was available
  const from = location.state.from.pathname || '/';

  return <Navigate to={from} state={{ replace: true }} />;
}

export default OnboardingLayout;
