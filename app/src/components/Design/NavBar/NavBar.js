import React from 'react';
import Logo from '../Logo/Logo';
import { menuData } from './NavData/NavData';
import './NavBar.css';
import Anchor from '../Anchor/Anchor';

function NavBar() {
  return (
    <nav className="nav">
      <Logo />
      <div className="NavMenu">
        {menuData.map((item) => <Anchor color="secondary" href={item.link}>{item.title}</Anchor>)}
      </div>
    </nav>
  );
}

export default NavBar;
