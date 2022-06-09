import { Outlet } from 'react-router-dom';
import { useAuthContext } from './AuthProvider';

function OnboardingLayout() {
  const { auth } = useAuthContext();

  if (!auth) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default OnboardingLayout;
