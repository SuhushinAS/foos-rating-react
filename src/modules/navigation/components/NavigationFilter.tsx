import {useAppSelector} from 'app/lib/hooks';
import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useCity} from 'modules/navigation/lib/useCity';
import {useFilter} from 'modules/navigation/lib/useFilter';
import {useNavigationWithDate} from 'modules/navigation/lib/useNavigationListWithDate';
import {useSetFilter} from 'modules/navigation/lib/useSetFilter';
import {filterData} from 'modules/navigation/model/constants';
import {TFilter} from 'modules/navigation/model/types';
import {selectLastEvent} from 'modules/rating/model/selectors';
import React, {useMemo} from 'react';
import './NavigationFooter.less';

export const NavigationFilter = () => {
  const city = useCity();
  const filter = useFilter();
  const setFilter = useSetFilter();
  const lastEvent = useAppSelector(selectLastEvent(city));
  const filterLast = useNavigationWithDate(filterData[TFilter.last], lastEvent?.date);

  const filterList = useMemo(() => {
    return [filterData[TFilter.none], filterLast, filterData[TFilter.favorite]];
  }, [filterLast]);

  return <NavigationList<TFilter> list={filterList} onChange={setFilter} value={filter} />;
};
