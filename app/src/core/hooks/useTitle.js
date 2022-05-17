import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | EIMMO`;
  }, [title]);
};

export default useTitle;
