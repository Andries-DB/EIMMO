import React, { useState } from 'react';
import './Searchpage.css';
import { BsFilter } from 'react-icons/bs';
import SearchFilter from '../../../SearchFilter/SearchFilter';
import { Property } from '../../../Property/Property';

function Searchpage() {
  const [searchFilter, setSearchFilter] = useState(false);
  const onClick = () => setSearchFilter(!searchFilter);
  return (
    <div className="searchpageContainer">
      <div className="searchpageWrapper" onClick={onClick} aria-hidden="true">
        <h1>
          Search property by filters
          <BsFilter className="iconFilter" />
        </h1>
      </div>
      {searchFilter && <SearchFilter />}
      <h1 className="propertiesTitle">Properties</h1>

      <div className="propertiesPage">
        {[].map((property) => <Property property={property} key={property.id} />)}
      </div>
      {[].length === 0 && (
        <div className="noPropertiesPage">
          <h1> No results</h1>
        </div>
      )}
    </div>
  );
}

export default Searchpage;
