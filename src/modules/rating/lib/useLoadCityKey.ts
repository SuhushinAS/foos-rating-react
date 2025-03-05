import {TCity} from 'modules/navigation/model/types';
import {getLoadCityKey} from 'modules/rating/lib/getLoadCityKey';
import {useMemo} from 'react';

export const useLoadCityKey = (city: TCity) => {
  return useMemo(() => {
    return getLoadCityKey(city);
  }, [city]);
};
