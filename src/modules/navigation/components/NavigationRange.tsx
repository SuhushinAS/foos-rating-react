import {useDateFormat} from 'modules/common/lib/useDateFormat';
import 'modules/navigation/components/Navigation.less';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {getIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useRange} from 'modules/navigation/lib/useRange';
import {rangeList} from 'modules/navigation/model/constants';
import {TRange} from 'modules/navigation/model/types';
import {useSeasonStartDate} from 'modules/rating/lib/useSeasonStartDate';
import React, {useMemo} from 'react';

type Props = {
  city: TCity;
};

const indexMap = getIndexMap(rangeList);

export const NavigationRange = ({city}: Props) => {
  const [range, setRange] = useRange();
  const seasonStartDate = useSeasonStartDate(city);
  const dateFormat = useDateFormat(seasonStartDate);

  const listDate = useMemo(() => {
    const listDate = [...rangeList];
    const index = indexMap[TRange.season];
    const range = listDate[index];

    listDate[index] = {...range, title: dateFormat};

    return listDate;
  }, [dateFormat]);

  return <NavigationItemList<TRange> list={listDate} onChange={setRange} value={range} />;
};
