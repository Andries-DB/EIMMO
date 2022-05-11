import { useCallback, useEffect, useState } from 'react';
import useAuthApi from './useAuthApi';

const useFetch = (path) => {
  const { authFetch } = useAuthApi();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = useCallback(() => {
    let isCurrent = true;
    authFetch(`${process.env.REACT_APP_API_URL}${path}`)
      .then((info) => isCurrent && setData(info))
      .catch((fault) => isCurrent && setError(String(fault)));

    return () => (isCurrent = false);
  }, [path, authFetch]);

  const invalidate = () => {
    fetchData();
  };

  useEffect(() => fetchData(), [fetchData]);

  const isLoading = !error && !data;

  return {
    isLoading,
    data,
    error,
    invalidate,
  };
};

export default useFetch;
