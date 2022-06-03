import { Routes, Route, Navigate } from 'react-router-dom';
import {
  AdminRoutes, AuthRoutes, BasicRoutes, ImmoRoutes
} from '../../core/routing';
import './App.css';
import LandingPage from './Screens/Public/LandingPage';
import Overview from './Screens/Public/Overview';
import AuthProvider from './Auth/AuthProvider';
import AuthContainer from './Auth/AuthContainer';
import AppLayout from './AppLayout';
import LoginScreen from './Auth/Login/LoginScreen';
import OnboardingLayout from './Auth/OnboardingLayout';
import PropertyDetail from './Screens/Public/PropertyDetail';
import AdminDashboard from './Screens/Admin/AdminDashboard';
import AdminImmoOverview from './Screens/Admin/AdminImmoOverview';
import AddClient from './Screens/Admin/add/AddClient';
import SettingsClient from './Screens/Admin/update/SettingsClient';
import AddHouse from './Screens/Admin/add/AddHouse';
import SettingsHouse from './Screens/Admin/update/SettingsHouse';

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
        {/* Admin */}
        <Route path={AdminRoutes.Dash} element={<AdminDashboard />} />
        <Route path={AdminRoutes.HouseOverview} element={<AdminImmoOverview />} />
        <Route path={AdminRoutes.AddClient} element={<AddClient />} />
        <Route path={AdminRoutes.SettingsClient} element={<SettingsClient />} />
        <Route path={AdminRoutes.AddHouse} element={<AddHouse />} />
        <Route path={AdminRoutes.SettingsHouse} element={<SettingsHouse />} />
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
