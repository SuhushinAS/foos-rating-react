import {TCity} from 'modules/navigation/model/types';
import {useRatingCity} from 'modules/rating/lib/useRatingCity';

export const useSeasonStartDate = (city: TCity) => {
  const ratingCity = useRatingCity(city);

  return ratingCity?.seasonStartDate;
};
