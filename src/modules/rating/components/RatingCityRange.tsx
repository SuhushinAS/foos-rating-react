import {useAppSelector} from 'app/lib/hooks';
import {selectNavigationFilter} from 'modules/navigation/model/selectors';
import {TCity, TRange} from 'modules/navigation/model/types';
import {RatingList} from 'modules/rating/components/RatingList';
import {RatingListEmpty} from 'modules/rating/components/RatingListEmpty';
import {useLoadCityKey} from 'modules/rating/lib/useLoadCityKey';
import {useRatingsFilter} from 'modules/rating/lib/useRatingsFilter';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import React from 'react';

type TProps = {
  city: TCity;
  range: TRange;
};

export const RatingCityRange = ({city, range}: TProps) => {
  const filter = useAppSelector(selectNavigationFilter);
  const ratings = useRatingsFilter(city, range, filter);

  const loadKey = useLoadCityKey(city);
  const load = useLoadItem(loadKey);
  const loading = load ?? true;

  if (0 < ratings.length) {
    return <RatingList city={city} ratings={ratings} />;
  }

  if (loading) {
    return null;
  }

  return <RatingListEmpty city={city} filter={filter} />;
};
