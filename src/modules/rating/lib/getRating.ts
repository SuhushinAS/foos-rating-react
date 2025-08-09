import {FilterRating} from 'modules/rating/lib/filterRating';
import {TRating, TRatingAPI} from 'modules/rating/model/types';

const getRatingListPrev = <T extends TRatingAPI>(acc: T[], rating: T, index: number) => {
  acc[index + rating.positionChange] = rating;

  return acc;
};

type PositionMap = Record<number, number>;

const getPositionMap = <T extends TRatingAPI>(acc: PositionMap, rating: T, index: number) => {
  acc[rating.id] = index + 1;

  return acc;
};

type GetRatingPositionParams<T extends TRatingAPI> = {
  ratingList: T[];
  filterRating: FilterRating;
};

export const getPositionPrevMap = <T extends TRatingAPI>({filterRating, ratingList}: GetRatingPositionParams<T>) => {
  return ratingList.reduce<TRatingAPI[]>(getRatingListPrev, []).filter(filterRating).reduce(getPositionMap, {});
};

export const getRating = <T extends TRatingAPI>({filterRating, ratingList}: GetRatingPositionParams<T>) => {
  const positionPrevMap = getPositionPrevMap({filterRating, ratingList});

  return ratingList.filter(filterRating).reduce((acc: TRating[], rating: T, index: number) => {
    const position = index + 1;
    const positionPrev = positionPrevMap[rating.id];

    acc.push({
      ...rating,
      position,
      positionChange: positionPrev - position,
    });

    return acc;
  }, []);
};
