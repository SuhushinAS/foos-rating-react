import {TRating} from 'modules/rating/model/types';

type PositionData = {
  position: number;
  positionChange: number;
  positionPrev: number;
  value: number;
  valueChange: number;
  valuePrev: number;
};

export type TPositionMap = Record<number, PositionData>;

export const getPositionMap = (ratingList: TRating[]): TPositionMap => {
  const ratingPrevList = ratingList.map((rating) => {
    const positionPrev = rating.position + rating.positionChange;
    const valuePrev = rating.value - rating.valueChange;

    return {
      ...rating,
      positionPrev,
      valuePrev,
    };
  });

  ratingPrevList.sort((rating2A, rating2B) => {
    if (rating2B.valuePrev === rating2A.valuePrev) {
      return rating2A.positionPrev - rating2B.positionPrev;
    }

    return rating2B.valuePrev - rating2A.valuePrev;
  });

  const positionPrevMap = ratingPrevList.reduce((acc, {id}, index) => {
    acc[id] = index + 1;

    return acc;
  }, {});

  return ratingList.reduce((acc, {id}, index) => {
    const position = index + 1;
    const positionPrev = positionPrevMap[id];
    const positionChange = positionPrev - position;

    acc[id] = {
      position,
      positionChange,
      positionPrev,
    };

    return acc;
  }, {});
};
