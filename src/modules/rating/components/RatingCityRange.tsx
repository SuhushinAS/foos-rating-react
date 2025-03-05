import {Loader} from 'modules/common/components/Loader';
import {useFilter} from 'modules/navigation/lib/useFilter';
import {TCity, TRange} from 'modules/navigation/model/types';
import {RatingList} from 'modules/rating/components/RatingList';
import {useLoadCityKey} from 'modules/rating/lib/useLoadCityKey';
import {useRatingsFilter} from 'modules/rating/lib/useRatingsFilter';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import React from 'react';

type TProps = {
  city: TCity;
  range: TRange;
};

export const RatingCityRange = ({city, range}: TProps) => {
  const [filter] = useFilter();
  const ratings = useRatingsFilter(city, range, filter);

  const loadKey = useLoadCityKey(city);
  const load = useLoadItem(loadKey);
  const loading = load ?? true;

  return (
    <Loader loading={loading}>
      <RatingList city={city} filter={filter} ratings={ratings} />
    </Loader>
  );
};
