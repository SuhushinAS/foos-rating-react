import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initStore} from 'modules/common/model/initStore';
import {TCity, TFilter, THistory, TRange, TSchemeV2} from 'modules/navigation/model/types';

export const navigation = createSlice({
  initialState: initStore.navigation,
  name: 'navigation',
  reducers: {
    setCity: (state, {payload}: PayloadAction<TCity>) => {
      state.city = payload;
    },
    setFilter: (state, {payload}: PayloadAction<TFilter>) => {
      state.filter = payload;
    },
    setHistory: (state, {payload}: PayloadAction<THistory>) => {
      state.history = payload;
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
