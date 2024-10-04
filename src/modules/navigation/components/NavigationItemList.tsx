import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {NavigationItemInner} from 'modules/navigation/components/NavigationItemInner';
import {useIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useNextClick} from 'modules/navigation/lib/useNextClick';
import {TNavigationListProps} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationItemList = <T extends string | number>({list, onChange, value}: TNavigationListProps<T>) => {
  const indexMap = useIndexMap(list);
  const index = indexMap[value];
  const item = list[index];

  const onNavigationButtonClick = useNextClick(list, onChange, index);

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <NavigationItem>
        <NavigationItemInner icon={item.icon} title={item.title} />
      </NavigationItem>
    </NavigationButton>
  );
};
