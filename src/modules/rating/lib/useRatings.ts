import {TCity, TRange} from 'modules/navigation/model/types';
import {useRatingRange} from 'modules/rating/lib/useRatingRange';
import {useMemo} from 'react';

export const useRatings = (city: TCity, range: TRange) => {
  const ratingRange = useRatingRange(city, range);

  return useMemo(() => {
    return ratingRange?.ratings ?? [];
  }, [ratingRange]);
};
