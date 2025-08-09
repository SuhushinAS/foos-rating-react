import {useAppSelector} from 'app/lib/hooks';
import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useNavigationWithDate} from 'modules/navigation/lib/useNavigationListWithDate';
import {useSetFilter} from 'modules/navigation/lib/useSetFilter';
import {filterData} from 'modules/navigation/model/constants';
import {selectNavigationCity, selectNavigationFilter} from 'modules/navigation/model/selectors';
import {TFilter} from 'modules/navigation/model/types';
import {selectLastEvent} from 'modules/rating/model/selectors';
import React, {useMemo} from 'react';
import './NavigationFooter.less';

export const NavigationFilter = () => {
  const city = useAppSelector(selectNavigationCity);
  const filter = useAppSelector(selectNavigationFilter);
  const setFilter = useSetFilter();
  const lastEvent = useAppSelector(selectLastEvent(city));
  const filterLast = useNavigationWithDate(filterData[TFilter.last], lastEvent?.date);

  const filterList = useMemo(() => {
    return [filterData[TFilter.none], filterLast, filterData[TFilter.favorite]];
  }, [filterLast]);

  return <NavigationList<TFilter> list={filterList} onChange={setFilter} value={filter} />;
};
