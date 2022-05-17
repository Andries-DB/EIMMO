import React from 'react';
import { useTranslation } from 'react-i18next';
import './Logo.css';

function Logo() {
  const { t } = useTranslation();

  return (
    <div className="logo">
      <a href="/">
        {t('Logo')}
      </a>
    </div>
  );
}

export default Logo;
