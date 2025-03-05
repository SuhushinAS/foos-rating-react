import {useAppDispatch} from 'app/lib/hooks';
import {TCity} from 'modules/navigation/model/types';
import {useFavorite} from 'modules/rating/lib/useFavorite';
import {ratingActions} from 'modules/rating/model/reducers';
import {useCallback, useMemo} from 'react';

export const useIsFavorite = (city: TCity, id: number): [number, (value: number) => void] => {
  const favorite = useFavorite(city);
  const dispatch = useAppDispatch();

  const isFavorite = useMemo(() => {
    return Number(favorite?.[id] ?? false);
  }, [favorite, id]);

  const setIsFavorite = useCallback(
    (isFavorite: number) => {
      dispatch(ratingActions.setFavoriteItem({city, id, isFavorite: Boolean(isFavorite)}));
    },
    [city, dispatch, id]
  );

  return [isFavorite, setIsFavorite];
};
