import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes, BasicRoutes } from '../../core/routing';
import './App.css';
import LandingPage from './Screens/Public/LandingPage';
import Overview from './Screens/Public/Overview';

function App() {
  return (
    <Routes>
      <Route path={BasicRoutes.Index} element={<LandingPage />} />
      <Route path={BasicRoutes.Buy} element={<Overview />} />
    </Routes>
  );
}

export default App;
