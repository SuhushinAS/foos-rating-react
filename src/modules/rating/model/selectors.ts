import {createAppSelector} from 'app/lib/hooks';
import {TState} from 'app/model/types';
import {selectCity, selectRange} from 'modules/navigation/model/selectors';
import {TCity, TRange} from 'modules/navigation/model/types';
import {rating} from 'modules/rating/model/reducers';
import {TFavorite, TFavoriteData, TLastEvent, TRatingCityData, TRatingStoreV2} from 'modules/rating/model/types';

export const selectRatingStore = (state: TState): TRatingStoreV2 => {
  return state[rating.name];
};

export const getFavoriteData = (ratingStore: TRatingStoreV2): TFavoriteData => {
  return ratingStore.favoriteData;
};

export const selectFavoriteData = createAppSelector(selectRatingStore, getFavoriteData);

export const getFavoriteCity = (favoriteData: TFavoriteData, city: TCity): TFavorite | undefined => {
  const favoriteCity = favoriteData[city];

  if (favoriteCity === undefined) {
    return undefined;
  }

  const favoriteCityFiltered = Object.entries(favoriteCity).filter(([, value]) => value);

  if (0 === favoriteCityFiltered.length) {
    return undefined;
  }

  return Object.fromEntries(favoriteCityFiltered);
};

export const selectFavoriteCity = createAppSelector([selectFavoriteData, selectCity], getFavoriteCity);

export const getRatingCityData = (ratingStore: TRatingStoreV2): TRatingCityData => {
  return ratingStore.cityData;
};

export const selectRatingCityData = createAppSelector(selectRatingStore, getRatingCityData);

export const getRatingCity = (ratingCityData: TRatingCityData, city: TCity) => {
  return ratingCityData[city];
};

export const selectRatingCity = createAppSelector([selectRatingCityData, selectCity], getRatingCity);

export const getRatingRangeData = (ratingCityData: TRatingCityData, city: TCity) => {
  const ratingCity = getRatingCity(ratingCityData, city);

  return ratingCity?.rangeData;
};

export const selectRatingRangeData = createAppSelector([selectRatingCityData, selectCity], getRatingRangeData);

export const getRatingRange = (ratingCityData: TRatingCityData, city: TCity, range: TRange) => {
  const ratingRangeData = getRatingRangeData(ratingCityData, city);

  return ratingRangeData?.[range];
};

export const selectRatingRange = createAppSelector([selectRatingCityData, selectCity, selectRange], getRatingRange);

export const getEventsTotal = (ratingCityData: TRatingCityData, city: TCity, range: TRange) => {
  const ratingRange = getRatingRange(ratingCityData, city, range);

  return ratingRange?.eventsTotal;
};

export const selectEventsTotal = createAppSelector([selectRatingCityData, selectCity, selectRange], getEventsTotal);

export const getRatings = (ratingCityData: TRatingCityData, city: TCity, range: TRange) => {
  const ratingRange = getRatingRange(ratingCityData, city, range);

  return ratingRange?.ratings;
};

export const selectRatings = createAppSelector([selectRatingCityData, selectCity, selectRange], getRatings);

export const getSeasonStartDate = (ratingCityData: TRatingCityData, city: TCity): string | undefined => {
  const ratingCity = getRatingCity(ratingCityData, city);

  return ratingCity?.seasonStartDate;
};

export const selectSeasonStartDate = createAppSelector([selectRatingCityData, selectCity], getSeasonStartDate);

export const getSeasonLastEvent = (ratingCityData: TRatingCityData, city: TCity): TLastEvent | undefined => {
  const ratingCity = getRatingCity(ratingCityData, city);

  return ratingCity?.lastEvent;
};

export const selectSeasonLastEvent = createAppSelector([selectRatingCityData, selectCity], getSeasonLastEvent);

export const getSeasonLastEventDate = (ratingCityData: TRatingCityData, city: TCity): string | undefined => {
  const seasonLastEvent = getSeasonLastEvent(ratingCityData, city);

  return seasonLastEvent?.date;
};

export const selectSeasonLastEventDate = createAppSelector([selectRatingCityData, selectCity], getSeasonLastEventDate);

export const getSeasonLastEventName = (ratingCityData: TRatingCityData, city: TCity): string | undefined => {
  const seasonLastEvent = getSeasonLastEvent(ratingCityData, city);

  return seasonLastEvent?.name;
};

export const selectSeasonLastEventName = createAppSelector([selectRatingCityData, selectCity], getSeasonLastEventName);
