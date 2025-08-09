import {useAppSelector} from 'app/lib/hooks';
import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useNavigationWithDate} from 'modules/navigation/lib/useNavigationListWithDate';
import {useSetRange} from 'modules/navigation/lib/useSetRange';
import {rangeData} from 'modules/navigation/model/constants';
import {selectNavigationCity, selectNavigationRange} from 'modules/navigation/model/selectors';
import {TRange} from 'modules/navigation/model/types';
import {selectSeasonStartDate} from 'modules/rating/model/selectors';
import React, {useMemo} from 'react';

export const NavigationRange = () => {
  const city = useAppSelector(selectNavigationCity);
  const range = useAppSelector(selectNavigationRange);
  const setRange = useSetRange();
  const seasonStartDate = useAppSelector(selectSeasonStartDate(city));
  const rangeSeason = useNavigationWithDate(rangeData[TRange.season], seasonStartDate);

  const rangeList = useMemo(() => {
    return [rangeData[TRange.full], rangeSeason];
  }, [rangeSeason]);

  return <NavigationList<TRange> list={rangeList} onChange={setRange} value={range} />;
};
