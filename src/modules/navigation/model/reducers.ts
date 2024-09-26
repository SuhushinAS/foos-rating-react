import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCity, TEvent, TNavigation, TPlayer, TRange, TSchemeKey} from 'modules/navigation/model/types';

const initialState: TNavigation = {
  city: TCity.tsk,
  event: TEvent.full,
  player: TPlayer.full,
  range: TRange.full,
  scheme: TSchemeKey.auto,
};

export const navigation = createSlice({
  initialState,
  name: 'navigation',
  reducers: {
    setCity: (state, {payload}: PayloadAction<TCity>) => {
      state.city = payload;
    },
    setEvent: (state, {payload}: PayloadAction<TEvent>) => {
      state.event = payload;
    },
    setPlayer: (state, {payload}: PayloadAction<TPlayer>) => {
      state.player = payload;
    },
    setRange: (state, {payload}: PayloadAction<TRange>) => {
      state.range = payload;
    },
    setScheme: (state, {payload}: PayloadAction<TSchemeKey>) => {
      state.scheme = payload;
    },
  },
});

export const navigationActions = navigation.actions;
