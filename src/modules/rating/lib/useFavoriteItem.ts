import {TCity} from 'modules/navigation/model/types';
import {useFavorite} from 'modules/rating/lib/useFavorite';
import {useMemo} from 'react';

export const useFavoriteItem = (city: TCity, id: number) => {
  const favorite = useFavorite(city);

  return useMemo(() => {
    return favorite?.[id] ?? false;
  }, [favorite, id]);
};
