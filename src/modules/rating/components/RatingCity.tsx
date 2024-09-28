import {TCity} from 'modules/navigation/model/types';
import {useRatingCityLoad} from 'modules/rating/lib/useRatingCityLoad';
import React from 'react';

type TProps = {
  city: TCity;
};

export const RatingCity = ({city}: TProps) => {
  useRatingCityLoad(city);

  return <div>RatingCity</div>;
};
