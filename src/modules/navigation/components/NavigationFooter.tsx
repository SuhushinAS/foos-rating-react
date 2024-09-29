import {Navigation} from 'modules/navigation/components/Navigation';
import 'modules/navigation/components/Navigation.less';
import {NavigationFilterList} from 'modules/navigation/components/NavigationFilterList';
import {NavigationRangeList} from 'modules/navigation/components/NavigationRangeList';
import React from 'react';

export const NavigationFooter = () => {
  return (
    <div>
      <Navigation>
        <NavigationRangeList />
        <NavigationFilterList />
      </Navigation>
    </div>
  );
};