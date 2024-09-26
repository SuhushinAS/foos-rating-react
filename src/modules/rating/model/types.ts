import {TCity, TSchemeKey} from 'modules/navigation/model/types';

export type TRatingStoreV1 = {
  favorite?: TFavorite;
  isFavorite?: boolean;
  isLast?: boolean;
  isLoading?: boolean;
  isSeason?: boolean;
  lastEvent?: TLastEvent;
  ratings?: TRating[];
  scheme?: TSchemeKey;
  seasonStartDate?: string;
  tsk?: TRatingDataV1;
  view?: string;
};

export type TRatingDataV1 = {
  ratings?: TRating[];
  season?: TRating[];
};

export type TRatingStoreV2 = {
  favoriteData: TFavoriteData;
  ratingData: TRatingCityData;
};

export type TRatingCityData = {
  [key in TCity]?: TRatingCity;
};

export type TRatingCity = {
  favorite: TFavorite;
  lastEvent: TLastEvent;
  ratings: TRating[];
  season: TRating[];
  seasonStartDate: string;
};

export type TFavoriteData = {
  [key in TCity]?: TFavorite;
};

export type TFavorite = Record<string, number>;

export type TLastEvent = {
  date: string;
  name: string;
};

export type TRating = TRatingAPI & {
  position: number;
};

export type TRatingDataAPI = {
  eventsTotal: number;
  lastEvent: TLastEvent;
  ratings: TRatingAPI[];
};

export type TRatingSeasonDataAPI = {
  eventsTotal: number;
  lastEvent: TLastEvent;
  ratings: TRatingAPI[];
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
