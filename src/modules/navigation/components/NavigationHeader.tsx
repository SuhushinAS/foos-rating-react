import {Navigation} from 'modules/navigation/components/Navigation';
import 'modules/navigation/components/Navigation.less';
import {NavigationItemCity} from 'modules/navigation/components/NavigationItemCity';
import React from 'react';

export const NavigationHeader = () => {
  return (
    <Navigation>
      <NavigationItemCity />
    </Navigation>
  );
};
