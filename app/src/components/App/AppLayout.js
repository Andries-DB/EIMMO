import { Outlet } from 'react-router-dom';
import NavBar from '../Design/NavBar/Public/NavBar';

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
