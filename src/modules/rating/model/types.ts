import {TCityData, TCityKey, TCityV1} from 'modules/city/model/types';
import {TEventKey} from 'modules/event/model/types';
import {TPlayerKey} from 'modules/player/model/types';
import {TRangeKey} from 'modules/range/model/types';
import {TSchemeKey} from 'modules/scheme/model/types';

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
  tsk?: TCityV1;
  view?: string;
};

export type TRatingStoreV2 = {
  city: TCityKey;
  ratingData: TCityData;
  event: TEventKey;
  favoriteData: TFavoriteData;
  player: TPlayerKey;
  range: TRangeKey;
  scheme: TSchemeKey;
};

export type TFavoriteData = {
  [key in TCityKey]?: TFavorite;
};

export type TFavorite = Record<string, number>;
export type TLastEvent = {
  date: string;
  name: string;
};
export type TRating = {
  eventsPlayed: number;
  id: number;
  matchesPlayed: number;
  name: string;
  position: number;
  positionChange: number;
  rank: string;
  value: number;
  valueChange: number;
  wasInLastEvent: boolean;
};
