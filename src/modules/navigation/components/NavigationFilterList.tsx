import {useDateFormat} from 'modules/common/lib/useDateFormat';
import 'modules/navigation/components/Navigation.less';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {useFilter} from 'modules/navigation/lib/useFilter';
import {getIndexMap} from 'modules/navigation/lib/useIndexMap';
import {filterList} from 'modules/navigation/model/constants';
import {TCity, TFilter} from 'modules/navigation/model/types';
import {useLastEventDate} from 'modules/rating/lib/useLastEventDate';
import React, {useMemo} from 'react';

type Props = {
  city: TCity;
};

const indexMap = getIndexMap(filterList);

export const NavigationFilterList = ({city}: Props) => {
  const [filter, setFilter] = useFilter();
  const lastEventDate = useLastEventDate(city);
  const dateFormat = useDateFormat(lastEventDate);

  const listDate = useMemo(() => {
    const listDate = [...filterList];
    const index = indexMap[TFilter.last];
    const filter = listDate[index];

    listDate[index] = {...filter, description: dateFormat};

    return listDate;
  }, [dateFormat]);

  return <NavigationItemList<TFilter> list={listDate} onChange={setFilter} value={filter} />;
};
