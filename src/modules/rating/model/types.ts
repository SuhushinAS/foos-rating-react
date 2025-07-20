import {TCity, TRange, TSchemeV1} from 'modules/navigation/model/types';

export type TRatingStoreV1 = {
  favorite?: TFavorite;
  isFavorite?: boolean;
  isLast?: boolean;
  isLoading?: boolean;
  isSeason?: boolean;
  lastEvent?: TLastEvent;
  ratings?: TRating[];
  scheme?: TSchemeV1;
  seasonStartDate?: string;
  tsk?: TRatingDataV1;
  view?: string;
};

export type TRatingDataV1 = {
  ratings?: TRating[];
  season?: TRating[];
};

export type TRatingStoreV2 = {
  cityData: TRatingCityData;
  favoriteData: TFavoriteData;
};

export type TRatingCityData = {
  [key in TCity]?: TRatingCity;
};

export type TRatingCity = {
  lastEvent: TLastEvent;
  rangeData: TRatingRangeData;
  seasonStartDate: string;
};

export type TRatingRangeData = {
  [key in TRange]?: TRatingRange;
};

export type TRatingRange = {
  eventsTotal: number;
  ratings: TRating[];
};

export type TFavoriteData = {
  [key in TCity]?: TFavorite;
};

export type TFavorite = Record<string, boolean>;

export type TLastEvent = {
  date: string;
  name: string;
};

export type TRating = TRatingAPI & {
  position: number;
};

export type TRatingFilter = TRating & {
  positionChangeFilter: number;
  positionFilter: number;
};

export type TRatingDataAPI = {
  eventsTotal: number;
  lastEvent: TLastEvent;
  ratings: TRatingAPI[];
};

export type TRatingSeasonDataAPI = TRatingDataAPI & {
  seasonStartDate: string;
};

export type TRatingAPI = {
  eventsPlayed: number;
  id: number;
  matchesPlayed: number;
  name: string;
  positionChange: number;
  rank: string;
  value: number;
  valueChange: number;
  wasInLastEvent: boolean;
};
