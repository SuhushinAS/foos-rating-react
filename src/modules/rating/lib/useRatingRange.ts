import {TCity, TRange} from 'modules/navigation/model/types';
import {useRatingCity} from 'modules/rating/lib/useRatingCity';
import {useMemo} from 'react';

export const useRatingRange = (city: TCity, range: TRange) => {
  const ratingCity = useRatingCity(city);

  return useMemo(() => {
    return ratingCity?.rangeData?.[range];
  }, [range, ratingCity]);
};
