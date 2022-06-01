import { useTranslation } from 'react-i18next';
import React from 'react';

import '../NavBar.css';
import { useAuthContext } from '../../../App/Auth/AuthProvider';
import { AdminRoutes, ImmoRoutes } from '../../../../core/routing';

import NavBarItems from './NavBarItems';

function NavBar() {
  const { t } = useTranslation();
  const { logout } = useAuthContext();

  const items = [
    {
      href: AdminRoutes.Dash,
      label: t('Navigation.AdminDash')
    },
    {
      href: AdminRoutes.HouseOverview,
      label: t('Navigation.PropertiesOverview')
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
