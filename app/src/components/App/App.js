import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes, BasicRoutes } from '../../core/routing';
import './App.css';
import LandingPage from './Screens/Public/LandingPage';

function App() {
  return (
    <Routes>
      <Route path={BasicRoutes.Index} element={<LandingPage />} />
    </Routes>
  );
}

export default App;
