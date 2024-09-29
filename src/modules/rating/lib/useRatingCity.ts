import {TCity} from 'modules/navigation/model/types';
import {useRatingCityData} from 'modules/rating/lib/useRatingCityData';

export const useRatingCity = (city: TCity) => {
  const ratingCityData = useRatingCityData();

  return ratingCityData[city];
};
