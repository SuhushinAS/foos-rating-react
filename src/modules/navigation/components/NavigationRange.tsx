import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useRange} from 'modules/navigation/lib/useRange';
import {rangeList} from 'modules/navigation/model/constants';
import {TRange} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationRange = () => {
  const [range, setRange] = useRange();

  return <NavigationList<TRange> list={rangeList} onChange={setRange} value={range} />;
};
