import {useAppSelector} from 'app/lib/hooks';
import {selectRatingStore} from 'modules/rating/model/selectors';

export const useRatingCityData = () => {
  const {cityData} = useAppSelector(selectRatingStore);

  return cityData;
};
