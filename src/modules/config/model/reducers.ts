import {createSlice} from '@reduxjs/toolkit';
import type {TConfig} from 'modules/config/model/types';

const initialState: TConfig = {
  "urls": {
    "nsk": {
      "full": "",
      "season": ""
    },
    "tsk": {
      "full": "",
      "season": ""
    }
  }
};

export const config = createSlice({
  initialState,
  name: 'config',
  reducers: {
    update: (state, {payload}) => ({...state, ...payload}),
  },
});

export const configActions = config.actions;
