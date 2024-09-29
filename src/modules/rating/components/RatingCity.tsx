import {useRange} from 'modules/navigation/lib/useRange';
import {TCity} from 'modules/navigation/model/types';
import {RatingCityRange} from 'modules/rating/components/RatingCityRange';
import {useRatingCityLoad} from 'modules/rating/lib/useRatingCityLoad';
import React from 'react';

type TProps = {
  city: TCity;
};

export const RatingCity = ({city}: TProps) => {
  const [range] = useRange();

  useRatingCityLoad(city);

  return <RatingCityRange city={city} range={range} />;
};
