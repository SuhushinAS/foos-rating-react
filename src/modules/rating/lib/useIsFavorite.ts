import {useAppDispatch} from 'app/lib/hooks';
import {TCity} from 'modules/navigation/model/types';
import {useFavoriteItem} from 'modules/rating/lib/useFavoriteItem';
import {ratingActions} from 'modules/rating/model/reducers';
import {useCallback, useMemo} from 'react';

export const useIsFavorite = (city: TCity, id: number): [number, (value: number) => void] => {
  const favoriteItem = useFavoriteItem(city, id);
  const dispatch = useAppDispatch();

  const setIsFavorite = useCallback(
    (isFavorite: number) => {
      dispatch(ratingActions.setFavoriteItem({city, id, isFavorite: Boolean(isFavorite)}));
    },
    [city, dispatch, id]
  );

  return useMemo(() => {
    return [Number(favoriteItem), setIsFavorite];
  }, [favoriteItem, setIsFavorite]);
};
