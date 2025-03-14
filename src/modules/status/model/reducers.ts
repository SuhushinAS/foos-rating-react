import {createSlice} from '@reduxjs/toolkit';
import {TStatusStore} from 'modules/status/model/types';

const initialState: TStatusStore = {
  load: {},
};

export const status = createSlice({
  initialState,
  name: 'status',
  reducers: {
    loadStart: (state, {payload}) => {
      state.load[payload] = true;
    },
    loadStop: (state, {payload}) => {
      state.load[payload] = false;
    },
  },
});

export const statusActions = status.actions;
