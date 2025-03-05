import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useRange} from 'modules/navigation/lib/useRange';
import {useSetRange} from 'modules/navigation/lib/useSetRange';
import {rangeList} from 'modules/navigation/model/constants';
import {TRange} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationRange = () => {
  const range = useRange();
  const setRange = useSetRange();

  return <NavigationList<TRange> list={rangeList} onChange={setRange} value={range} />;
};
