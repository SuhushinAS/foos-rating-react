import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {NavigationItemInner} from 'modules/navigation/components/NavigationItemInner';
import {TNavigationItem} from 'modules/navigation/model/types';
import React from 'react';

type Props<T extends string | number> = {
  isActive: boolean;
  item: TNavigationItem<T>;
};

export const NavigationListItem = <T extends string | number>({isActive, item}: Props<T>) => {
  return (
    <NavigationItem isActive={isActive}>
      <NavigationItemInner icon={item.icon} title={item.title} />
    </NavigationItem>
  );
};
