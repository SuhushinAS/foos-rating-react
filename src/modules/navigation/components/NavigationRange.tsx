import {useAppSelector} from 'app/lib/hooks';
import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useCity} from 'modules/navigation/lib/useCity';
import {useNavigationWithDate} from 'modules/navigation/lib/useNavigationListWithDate';
import {useRange} from 'modules/navigation/lib/useRange';
import {useSetRange} from 'modules/navigation/lib/useSetRange';
import {rangeData} from 'modules/navigation/model/constants';
import {TRange} from 'modules/navigation/model/types';
import {selectSeasonStartDate} from 'modules/rating/model/selectors';
import React, {useMemo} from 'react';

export const NavigationRange = () => {
  const city = useCity();
  const range = useRange();
  const setRange = useSetRange();
  const seasonStartDate = useAppSelector(selectSeasonStartDate(city));
  const rangeSeason = useNavigationWithDate(rangeData[TRange.season], seasonStartDate);

  const rangeList = useMemo(() => {
    return [rangeData[TRange.full], rangeSeason];
  }, [rangeSeason]);

  return <NavigationList<TRange> list={rangeList} onChange={setRange} value={range} />;
};
