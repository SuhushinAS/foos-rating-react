import {useAppSelector} from 'app/lib/hooks';
import {selectRatingStore} from 'modules/rating/model/selectors';

export const useFavoriteData = () => {
  const {favoriteData} = useAppSelector(selectRatingStore);

  return favoriteData;
};
