import {TCity} from 'modules/navigation/model/types';
import {useFavorite} from 'modules/rating/lib/useFavorite';

export const useFavoriteItem = (city: TCity, id: number) => {
  const favorite = useFavorite(city) ?? {};

  return favorite[id] ?? false;
};
