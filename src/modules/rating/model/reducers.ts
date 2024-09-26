import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCity} from 'modules/navigation/model/types';
import {TFavorite, TRatingCity, TRatingStoreV2} from 'modules/rating/model/types';

const initialState: TRatingStoreV2 = {
  cityData: {},
  favoriteData: {},
};

export const rating = createSlice({
  initialState,
  name: 'rating',
  reducers: {
    init: (state, {payload}: PayloadAction<Partial<TRatingStoreV2>>) => {
      return {...state, ...payload};
    },
    load: (state, {payload}: PayloadAction<{city: TCity; cityData: Partial<TRatingCity>}>) => {
      const {city, cityData} = payload;

      state.cityData[city] = {
        ...state.cityData[city],
        ...cityData,
      };

      return state;
    },
    setFavorite: (state, {payload}: PayloadAction<{city: TCity; favorite: TFavorite}>) => {
      const {city, favorite} = payload;

      state.favoriteData[city] = favorite;

      return state;
    },
    setRating: (state, {payload}: PayloadAction<{city: TCity; rating: Partial<TRatingCity>}>) => {
      const {city, rating} = payload;

      state.cityData[city] = rating;

      return state;
    },
  },
});

export const ratingActions = rating.actions;
