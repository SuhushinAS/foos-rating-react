import {TDispatch} from 'app/types';
import {TCityKey} from 'modules/city/model/types';
import {storageKeyV1, storageKeyV2} from 'modules/rating/model/constants';
import {ratingActions} from 'modules/rating/model/reducers';
import {TRatingStoreV1, TRatingStoreV2} from 'modules/rating/model/types';

export const actionRatingInit = (dispatch: TDispatch) => {
  const stateStringV2 = localStorage.getItem(storageKeyV2);

  if (null === stateStringV2) {
    const stateStringV1 = localStorage.getItem(storageKeyV1);

    // localStorage.removeItem(storageKeyV1);

    if (null !== stateStringV1) {
      try {
        const stateV1 = JSON.parse(stateStringV1) as TRatingStoreV1;

        dispatch(
          ratingActions.init({
            favoriteData: {
              [TCityKey.tsk]: stateV1.favorite,
            },
            scheme: stateV1.scheme,
          })
        );
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
};
