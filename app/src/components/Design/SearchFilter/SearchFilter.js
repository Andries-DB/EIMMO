import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdCancel } from 'react-icons/md';
import useTitle from '../../../core/hooks/useTitle';

function SearchFilter() {
  const { t } = useTranslation();
  useTitle(t('SearchPage.SearchFilter.Title'));

  return (
    <div className="searchpageWrapper">{t('SearchPage.SearchFilter.Description')}</div>
  );
}

export default SearchFilter;
