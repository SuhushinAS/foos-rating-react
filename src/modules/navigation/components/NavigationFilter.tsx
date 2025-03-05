import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useFilter} from 'modules/navigation/lib/useFilter';
import {filterList} from 'modules/navigation/model/constants';
import {TFilter} from 'modules/navigation/model/types';
import React from 'react';
import './NavigationFooter.less';

export const NavigationFilter = () => {
  const [filter, setFilter] = useFilter();

  return <NavigationList<TFilter> list={filterList} onChange={setFilter} value={filter} />;
};
