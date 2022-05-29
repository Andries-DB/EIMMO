import React from 'react';

import useTitle from '../../../../core/hooks/useTitle';
import useFetch from '../../../../core/hooks/useFetch';
import NavBar from '../../../Design/NavBar/NavBar';
import PropDetail from '../../../Design/Property/Detail/PropDetail';

function PropertyDetail() {
  return (
    <>
      <NavBar />
      <PropDetail />
    </>

  );
}

export default PropertyDetail;
