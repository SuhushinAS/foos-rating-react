import {Loader} from 'modules/common/components/Loader';
import {useFilter} from 'modules/navigation/lib/useFilter';
import {TCity, TRange} from 'modules/navigation/model/types';
import {RatingList} from 'modules/rating/components/RatingList';
import {getLoadCityKey} from 'modules/rating/lib/getLoadCityKey';
import {useRatingsFilter} from 'modules/rating/lib/useRatingsFilter';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import React, {useMemo} from 'react';

type TProps = {
  city: TCity;
  range: TRange;
};

export const RatingCityRange = ({city, range}: TProps) => {
  const [filter] = useFilter();
  const ratings = useRatingsFilter(city, range, filter);
  const loadKey = useMemo(() => {
    return getLoadCityKey(city);
  }, [city]);
  const load = useLoadItem(loadKey);

  if (undefined === load) {
    return null;
  }

  if (load) {
    return <Loader />;
  }

  if (0 === ratings.length) {
    return null;
  }

  return <RatingList city={city} ratings={ratings} />;
};
