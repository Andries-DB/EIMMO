import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import useFetch from '../../../core/hooks/useFetch';
import useTitle from '../../../core/hooks/useTitle';
import Anchor from '../Anchor/Anchor';
import Property from '../Property/Property';
import SearchFilter from '../SearchFilter/SearchFilter';
import './Overview.css';

function ImmoOverview() {
  const { data: properties } = useFetch('/immo');
  const [searchFilter, setSearchFilter] = useState(false);
  const onClick = () => setSearchFilter(!searchFilter);

  const { t } = useTranslation();
  useTitle(t('Titles.SearchPage'));
  return (
    <div className="overviewImmo">

      <div className="searchpageContainer">
        <div className="searchpageWrapper" onClick={onClick} aria-hidden="true">
          <h1>
            {t('SearchPage.Description')}
            <BsFilter className="iconFilter" />
          </h1>
        </div>
        {searchFilter && <SearchFilter />}

        <h1 className="propertiesTitle">{t('SearchPage.Prop')}</h1>
        <div className="btn-add">
          <Anchor href="/immo/add">
            <AiOutlineUserAdd className="btn-add-icon" />
            {t('Button.AddHouse')}
          </Anchor>
        </div>
        <div className="propertiesPage">
          {properties?.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>
        {properties?.length === 0 && (
        <div className="noPropertiesPage">
          <h1>{t('SearchPage.Results.NoResult')}</h1>
        </div>
        )}
      </div>

    </div>
  );
}

export default ImmoOverview;
