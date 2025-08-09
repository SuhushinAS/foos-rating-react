import {TState} from 'app/model/types';
import {TCity, TRange} from 'modules/navigation/model/types';
import {rating} from 'modules/rating/model/reducers';
import {
  TFavorite,
  TFavoriteData,
  TLastEvent,
  TRating,
  TRatingCity,
  TRatingCityData,
  TRatingRange,
  TRatingRangeData,
  TRatingStoreV2,
} from 'modules/rating/model/types';

export const selectRatingStore = (state: TState): TRatingStoreV2 => {
  return state[rating.name];
};

export const selectRatingCityData = (state: TState): TRatingCityData => {
  return selectRatingStore(state).cityData;
};

export const selectRatingCity = (city: TCity) => {
  return (state: TState): TRatingCity | undefined => {
    return selectRatingCityData(state)[city];
  };
};

export const selectRatingRangeData = (city: TCity) => {
  return (state: TState): TRatingRangeData | undefined => {
    return selectRatingCity(city)(state)?.rangeData;
  };
};

export const selectRatingRange = (city: TCity, range: TRange) => {
  return (state: TState): TRatingRange | undefined => {
    return selectRatingRangeData(city)(state)?.[range];
  };
};

export const selectEventsTotal = (city: TCity, range: TRange) => {
  return (state: TState): number | undefined => {
    return selectRatingRange(city, range)(state)?.eventsTotal;
  };
};

export const selectRatings = (city: TCity, range: TRange) => {
  return (state: TState): TRating[] | undefined => {
    return selectRatingRange(city, range)(state)?.ratings;
  };
};

export const selectLastEvent = (city: TCity) => {
  return (state: TState): TLastEvent | undefined => {
    return selectRatingCity(city)(state)?.lastEvent;
  };
};

export const selectLastEventDate = (city: TCity) => {
  return (state: TState): string | undefined => {
    return selectLastEvent(city)(state)?.date;
  };
};

export const selectSeasonStartDate = (city: TCity) => {
  return (state: TState): string | undefined => {
    return selectRatingCity(city)(state)?.seasonStartDate;
  };
};

export const selectRatingFavoriteData = (state: TState): TFavoriteData => {
  return selectRatingStore(state).favoriteData;
};

export const selectRatingFavorite = (city: TCity) => {
  return (state: TState): TFavorite | undefined => {
    return selectRatingFavoriteData(state)[city];
  };
};
