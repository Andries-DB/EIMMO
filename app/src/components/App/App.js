import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes, BasicRoutes, ImmoRoutes } from '../../core/routing';
import './App.css';
import LandingPage from './Screens/Public/LandingPage';
import Overview from './Screens/Public/Overview';
import AuthProvider from './Auth/AuthProvider';
import AuthContainer from './Auth/AuthContainer';
import AppLayout from './AppLayout';
import LoginScreen from './Auth/Login/LoginScreen';
import OnboardingLayout from './Auth/OnboardingLayout';
import PropertyDetail from './Screens/Public/PropertyDetail';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Login screen */ }
        <Route path={AuthRoutes.Index} element={<OnboardingLayout />}>
          <Route path={AuthRoutes.Login} element={<LoginScreen />} />
          <Route
            path="*"
            element={<Navigate to={AuthRoutes.Login} />}
          />
        </Route>
        <Route
          element={(
            <AuthContainer>
              <AppLayout />
            </AuthContainer>
                      )}
        >
        </Route>

        {/* Public */}
        <Route path={BasicRoutes.Index} element={<LandingPage />} />
        <Route path={ImmoRoutes.Search} element={<Overview />} />
        <Route path={ImmoRoutes.Detail} element={<PropertyDetail />} />
        <Route
          path="*"
          element={<Navigate to={AuthRoutes.Login} />}
        />
        <Route
          element={(
            <AuthContainer>
              <AppLayout />
            </AuthContainer>
                      )}
        >
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
