import React from 'react';
import Logo from '../Logo/Logo';
import { menuData } from './NavData/NavData';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav">
      <Logo />
      <div className="NavMenu">
        {menuData.map((item) => <a href={item.link}>{item.title}</a>)}
      </div>
    </nav>
  );
}

export default NavBar;
