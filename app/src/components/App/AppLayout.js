import { Outlet } from 'react-router-dom';
import NavBar from '../Design/NavBar/NavBar';

function AppLayout() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>

    </>
  );
}

export default AppLayout;
