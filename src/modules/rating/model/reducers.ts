import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCityKey} from 'modules/city/model/types';
import {TEventKey} from 'modules/event/model/types';
import {TPlayerKey} from 'modules/player/model/types';
import {TRangeKey} from 'modules/range/model/types';
import {TRatingStoreV2} from 'modules/rating/model/types';
import {TSchemeKey} from 'modules/scheme/model/types';

const initialState: TRatingStoreV2 = {
  city: TCityKey.tsk,
  event: TEventKey.full,
  favoriteData: {},
  player: TPlayerKey.full,
  range: TRangeKey.full,
  ratingData: {},
  scheme: TSchemeKey.auto,
};

export const rating = createSlice({
  initialState,
  name: 'rating',
  reducers: {
    init: (state, {payload}: PayloadAction<Partial<TRatingStoreV2>>) => {
      return {...state, ...payload};
    },
    setCity: (state, {payload}: PayloadAction<TCityKey>) => {
      state.city = payload;
    },
    setEvent: (state, {payload}: PayloadAction<TEventKey>) => {
      state.event = payload;
    },
    setPlayer: (state, {payload}: PayloadAction<TPlayerKey>) => {
      state.player = payload;
    },
    setRange: (state, {payload}: PayloadAction<TRangeKey>) => {
      state.range = payload;
    },
    setScheme: (state, {payload}: PayloadAction<TSchemeKey>) => {
      state.scheme = payload;
    },
  },
});

export const ratingActions = rating.actions;
