import {TState} from 'app/types';
import {TCityKey} from 'modules/city/model/types';
import {TEventKey} from 'modules/event/model/types';
import {TPlayerKey} from 'modules/player/model/types';
import {TRangeKey} from 'modules/range/model/types';
import {rating} from 'modules/rating/model/reducers';
import {TRatingStoreV2} from 'modules/rating/model/types';
import {TSchemeKey} from 'modules/scheme/model/types';

export const selectRating = (state: TState): TRatingStoreV2 => {
  return state[rating.name];
};

export const selectRatingCity = (state: TState): TCityKey => {
  return selectRating(state).city;
};

export const selectRatingEvent = (state: TState): TEventKey => {
  return selectRating(state).event;
};

export const selectRatingPlayer = (state: TState): TPlayerKey => {
  return selectRating(state).player;
};

export const selectRatingRange = (state: TState): TRangeKey => {
  return selectRating(state).range;
};

export const selectRatingScheme = (state: TState): TSchemeKey => {
  return selectRating(state).scheme;
};
