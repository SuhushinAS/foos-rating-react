import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {NavigationItemInner} from 'modules/navigation/components/NavigationItemInner';
import {useIndexMap} from 'modules/navigation/lib/useIndexMap';
import {TNavigationListProps} from 'modules/navigation/model/types';
import React, {useCallback} from 'react';

export const NavigationItemList = <T extends string | number>({list, onChange, value}: TNavigationListProps<T>) => {
  const indexMap = useIndexMap(list);
  const index = indexMap[value];
  const item = list[index];

  const onNavigationButtonClick = useCallback(() => {
    const indexNext = (index + 1) % list.length;
    const itemNext = list[indexNext];

    onChange(itemNext.value);
  }, [index, list, onChange]);

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <NavigationItem>
        <NavigationItemInner icon={item.icon} title={item.title} />
      </NavigationItem>
    </NavigationButton>
  );
};
