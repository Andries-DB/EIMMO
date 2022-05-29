import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchFilter.css';
import useTitle from '../../../core/hooks/useTitle';
import { filterData, getFilterValues } from '../../../core/hooks/useFilter';

function SearchFilter() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState(filterData);
  useTitle(t('SearchPage.SearchFilter.Title'));

  return (
    <div className="filterwrapper">
      {filters?.map((filter) => (
        <div key={filter.queryName}>
          <select
            className="selectFilter"
            placeholder={filter.placeholder}
            // onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
          >
            <option value={filter.placeholder} selected>
              {filter.placeholder}
            </option>
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>{item.name}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default SearchFilter;
