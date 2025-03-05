import {useRange} from 'modules/navigation/lib/useRange';
import {TCity} from 'modules/navigation/model/types';
import {RatingCityHeader} from 'modules/rating/components/RatingCityHeader';
import {RatingCityRange} from 'modules/rating/components/RatingCityRange';
import {useRatingCityLoad} from 'modules/rating/lib/useRatingCityLoad';
import React from 'react';
import './RatingCity.less';

type TProps = {
  city: TCity;
  setCity: (value: TCity) => void;
};

export const RatingCity = ({city, setCity}: TProps) => {
  const range = useRange();

  useRatingCityLoad(city);

  return (
    <div className="RatingCity">
      <div className="RatingCity__Header">
        <RatingCityHeader city={city} setCity={setCity} />
      </div>
      <div className="RatingCity__Body">
        <RatingCityRange city={city} range={range} />
      </div>
    </div>
  );
};
