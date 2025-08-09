import {useAppSelector} from 'app/lib/hooks';
import {Loader} from 'modules/common/components/Loader';
import {selectNavigationFilter} from 'modules/navigation/model/selectors';
import {TCity, TRange} from 'modules/navigation/model/types';
import {RatingListWrapper} from 'modules/rating/components/RatingListWrapper';
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

  return (
    <Loader loading={loading}>
      <RatingListWrapper city={city} filter={filter} ratings={ratings} />
    </Loader>
  );
};
