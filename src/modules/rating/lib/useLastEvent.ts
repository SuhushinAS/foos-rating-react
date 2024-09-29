import {TCity} from 'modules/navigation/model/types';
import {useRatingCity} from 'modules/rating/lib/useRatingCity';

export const useLastEvent = (city: TCity) => {
  const ratingCity = useRatingCity(city);

  return ratingCity?.lastEvent;
};
