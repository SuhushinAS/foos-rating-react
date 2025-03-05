import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCity, TFilter, TNavigation, TRange, TSchemeV2} from 'modules/navigation/model/types';

const initialState: TNavigation = {
  city: TCity.tsk,
  filter: TFilter.none,
  range: TRange.full,
  scheme: TSchemeV2.auto,
};

export const navigation = createSlice({
  initialState,
  name: 'navigation',
  reducers: {
    setCity: (state, {payload}: PayloadAction<TCity>) => {
      state.city = payload;
    },
    setFilter: (state, {payload}: PayloadAction<TFilter>) => {
      state.filter = payload;
    },
    setRange: (state, {payload}: PayloadAction<TRange>) => {
      state.range = payload;
    },
    setScheme: (state, {payload}: PayloadAction<TSchemeV2>) => {
      state.scheme = payload;
    },
  },
});

export const navigationActions = navigation.actions;
