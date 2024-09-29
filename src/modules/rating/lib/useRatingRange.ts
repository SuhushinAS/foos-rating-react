import {TCity, TRange} from 'modules/navigation/model/types';
import {useRatingCity} from 'modules/rating/lib/useRatingCity';

export const useRatingRange = (city: TCity, range: TRange) => {
  const ratingCity = useRatingCity(city);

  return ratingCity?.rangeData?.[range];
};
