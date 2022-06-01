import React from 'react';
import Anchor from '../../Anchor/Anchor';

import Logo from '../../Logo/Logo';

function NavBarItems({ navItems = [], }) {
  return (
    <nav className="nav">
      <Logo />
      <div className="NavMenu">
        {navItems.map((item) => <Anchor color="secondary" href={item.href}>{item.label}</Anchor>)}

      </div>
    </nav>
  );
}

export default NavBarItems;
