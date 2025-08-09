import {TCity, TFilter} from 'modules/navigation/model/types';
import {RatingList} from 'modules/rating/components/RatingList';
import {RatingListEmpty} from 'modules/rating/components/RatingListEmpty';
import {TRating} from 'modules/rating/model/types';
import React from 'react';
import './RatingList.less';

type TProps = {
  city: TCity;
  filter: TFilter;
  ratings: TRating[];
};

export const RatingListWrapper = ({city, filter, ratings}: TProps) => {
  if (0 === ratings.length) {
    return <RatingListEmpty city={city} filter={filter} />;
  }

  return <RatingList city={city} filter={filter} ratings={ratings} />;
};
