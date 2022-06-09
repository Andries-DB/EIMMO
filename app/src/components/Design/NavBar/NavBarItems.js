import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from '../../App/Auth/AuthProvider';
import Anchor from '../Anchor/Anchor';
import Button from '../Button/Button';

import Logo from '../Logo/Logo';

function NavBarItems({ navItems = [] }) {
  const { t } = useTranslation();
  const { logout } = useAuthContext();
  const onclick = () => logout;
  const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
  let role = 'CLIENT';
  if (loggedinUser) {
    role = loggedinUser.role;
  }

  return (
    <nav className="nav">
      <Logo />
      <div className="NavMenu">
        {navItems.map((item) => <Anchor color="secondary" href={item.href}>{item.label}</Anchor>)}
        {role === 'CLIENT' ? '' : <Button onClick={onclick} color="secondary">{t('Button.Logout')}</Button>}
      </div>

    </nav>
  );
}

export default NavBarItems;
