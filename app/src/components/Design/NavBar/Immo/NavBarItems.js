import React from 'react';
import Anchor from '../../Anchor/Anchor';
import Button from '../../Button/Button';
import Logo from '../../Logo/Logo';

function NavBarItems({ navItems = [], onLogout }) {
  return (
    <nav className="nav">
      <Logo />
      <div className="NavMenu">
        {navItems.map((item) => <Anchor color="secondary" href={item.href}>{item.label}</Anchor>)}

        <Button onClick={onLogout} color="secondary">Logout</Button>
      </div>
    </nav>
  );
}

export default NavBarItems;
