import {TRating} from 'modules/rating/model/types';

export type TFavorite = Record<string, number>;
export type TLastEvent = {
  date: string;
  name: string;
};

export type TCityV1 = {
  ratings?: TRating[];
  season?: TRating[];
};

export type TCityData = {
  [key in TCityKey]?: TCityV2;
};

export enum TCityKey {
  nsk = 'nsk',
  tsk = 'tsk',
}

export type TCityV2 = {
  favorite: TFavorite;
  lastEvent: TLastEvent;
  ratings: TRating[];
  season: TRating[];
  seasonStartDate: string;
};
