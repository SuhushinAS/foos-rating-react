import {TState} from 'app/model/types';
import {rating} from 'modules/rating/model/reducers';
import {TRatingStoreV2} from 'modules/rating/model/types';

export const selectRatingStore = (state: TState): TRatingStoreV2 => {
  return state[rating.name];
};
