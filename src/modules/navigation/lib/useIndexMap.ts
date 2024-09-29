import {useMemo} from 'react';

export const getIndexMap = (list) => {
  return Object.fromEntries<number>(
    list.map(({value}, index) => {
      return [value, index];
    })
  );
};

export const useIndexMap = (list) => {
  return useMemo(() => {
    return getIndexMap(list);
  }, [list]);
};
