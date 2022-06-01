import { useTranslation } from 'react-i18next';
import React from 'react';

import '../NavBar.css';
import { useAuthContext } from '../../../App/Auth/AuthProvider';
import { ImmoRoutes, MakelaarRoutes } from '../../../../core/routing';

import NavBarItems from './NavBarItems';

function NavBar() {
  const { t } = useTranslation();
  const { logout } = useAuthContext();

  const items = [
    {
      href: MakelaarRoutes.Dash,
      label: t('Navigation.ImmoDash')
    },
    {
      href: ImmoRoutes.Search,
      label: t('Navigation.Search'),
    },
  ];
  /* } */
  return (
    <NavBarItems onLogout={logout} navItems={items} />
  );
}

export default NavBar;
