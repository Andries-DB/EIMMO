import { useTranslation } from 'react-i18next';
import React from 'react';
import Logo from '../Logo/Logo';
import './NavBar.css';
import Anchor from '../Anchor/Anchor';
import { useAuthContext } from '../../App/Auth/AuthProvider';
import {
  AdminRoutes, AuthRoutes, BasicRoutes, ImmoRoutes
} from '../../../core/routing';
import { isAdmin, isImmo, isUser } from '../../../core/modules/Users/utils';

function NavBar() {
  const { t } = useTranslation();
  const {
    // auth: { user },
    logout,
  } = useAuthContext();

  let items = [
    {
      href: AuthRoutes.Login,
      label: t('Navigation.Login'),
    },
    {
      href: ImmoRoutes.Search,
      label: t('Navigation.Search'),
    },
  ];

  if (isAdmin) {
    items = [
      ...items,
      {
        href: AdminRoutes.Dash,
        label: t('Navigation.AdminDash'),
      },
    ];
  }
  if (isUser) {
    //
  }
  if (isImmo) {
    //
  }
  return (
    <nav className="nav">
      <Logo />
      <div className="NavMenu">
        {items.map((item) => <Anchor color="secondary" href={item.href}>{item.label}</Anchor>)}
      </div>
    </nav>
  );
}

export default NavBar;
