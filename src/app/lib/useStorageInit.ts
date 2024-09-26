import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {navigationActions} from 'modules/navigation/model/reducers';
import {TCity, TEvent, TPlayer, TRange} from 'modules/navigation/model/types';
import {storageKeyV1, storageKeyV2} from 'modules/rating/model/constants';
import {ratingActions} from 'modules/rating/model/reducers';
import {selectRatingStore} from 'modules/rating/model/selectors';
import {TRatingStoreV1, TRatingStoreV2} from 'modules/rating/model/types';
import {useEffect, useState} from 'react';

export const useStorageInit = () => {
  const rating = useAppSelector(selectRatingStore);
  const dispatch = useAppDispatch();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    const stateStringV2 = localStorage.getItem(storageKeyV2);

    if (null === stateStringV2) {
      const stateStringV1 = localStorage.getItem(storageKeyV1);

      localStorage.removeItem(storageKeyV1);

      if (null !== stateStringV1) {
        try {
          const {favorite, isFavorite, isLast, isSeason, scheme} = JSON.parse(stateStringV1) as TRatingStoreV1;

          if (favorite !== undefined) {
            dispatch(ratingActions.setFavorite({city: TCity.tsk, favorite}));
          }

          if (scheme !== undefined) {
            dispatch(navigationActions.setScheme(scheme));
          }

          if (true === isSeason) {
            dispatch(navigationActions.setRange(TRange.season));
          }

          if (true === isFavorite) {
            dispatch(navigationActions.setPlayer(TPlayer.favorite));
          }

          if (true === isLast) {
            dispatch(navigationActions.setEvent(TEvent.last));
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      try {
        const stateV2 = JSON.parse(stateStringV2) as TRatingStoreV2;

        dispatch(ratingActions.init(stateV2));
      } catch (error) {
        console.error(error);
      }
    }

    setIsInit(true);
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      localStorage.setItem(storageKeyV2, JSON.stringify(rating));
    }
  }, [isInit, rating]);
};
