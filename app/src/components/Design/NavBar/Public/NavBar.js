import { useTranslation } from 'react-i18next';
import React from 'react';
import '../NavBar.css';
import { useAuthContext } from '../../../App/Auth/AuthProvider';
import { AuthRoutes, ImmoRoutes } from '../../../../core/routing';

import NavBarItems from './NavBarItems';

function NavBar() {
  const { t } = useTranslation();
  const { logout } = useAuthContext();

  const items = [
    {
      href: AuthRoutes.Login,
      label: t('Navigation.Login')
    },
    {
      href: ImmoRoutes.Search,
      label: t('Navigation.Search'),
    },
  ];
  /* } */
  return (
    <NavBarItems navItems={items} />
  );
}

export default NavBar;
