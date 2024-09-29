import {useAppDispatch} from 'app/lib/hooks';
import {TCity} from 'modules/navigation/model/types';
import {ratingActions} from 'modules/rating/model/reducers';
import {useCallback} from 'react';

export const useSetFavoriteItem = (city: TCity, id: number, isFavorite: boolean) => {
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch(ratingActions.setFavoriteItem({city, id, isFavorite}));
  }, [city, dispatch, id, isFavorite]);
};
