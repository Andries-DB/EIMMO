import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import './Searchpage.css';
import { BsFilter } from 'react-icons/bs';
import SearchFilter from '../../../SearchFilter/SearchFilter';
import { Property } from '../../../Property/Property';

import useTitle from '../../../../../core/hooks/useTitle';

function Searchpage() {
  const [searchFilter, setSearchFilter] = useState(false);
  const onClick = () => setSearchFilter(!searchFilter);
  const { t } = useTranslation();
  useTitle(t('SearchPage.Title'));

  return (
    <div className="searchpageContainer">
      <div className="searchpageWrapper" onClick={onClick} aria-hidden="true">
        <h1>
          {t('SearchPage.Description')}
          <BsFilter className="iconFilter" />
        </h1>
      </div>
      {searchFilter && <SearchFilter />}
      <h1 className="propertiesTitle">{t('SearchPage.Prop')}</h1>
      <div className="propertiesPage">
        {[].map((property) => <Property property={property} key={property.id} />)}
      </div>
      {[].length === 0 && (
        <div className="noPropertiesPage">
          <h1>{t('SearchPage.Results.NoRersult')}</h1>
        </div>
      )}
    </div>
  );
}

export default Searchpage;
