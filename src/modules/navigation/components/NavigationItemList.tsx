import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {NavigationItemInner} from 'modules/navigation/components/NavigationItemInner';
import 'modules/navigation/components/NavigationItemList.less';
import {useIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useNextClick} from 'modules/navigation/lib/useNextClick';
import {TNavigationListProps} from 'modules/navigation/model/types';
import React, {useCallback} from 'react';

export const NavigationItemList = <T extends string | number>(props: TNavigationListProps<T>) => {
  const {list, onChange, value} = props;
  const indexMap = useIndexMap(list);
  const currentIndex = indexMap[value];

  const onNavigationButtonClick = useNextClick(list, onChange, currentIndex);

  const renderNavigationItem = useCallback(
    (item, index) => {
      return (
        <NavigationItem isActive={index === currentIndex} key={item.title}>
          <NavigationItemInner icon={item.icon} title={item.title} />
        </NavigationItem>
      );
    },
    [currentIndex]
  );

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <div className="NavigationItemList">{list.map(renderNavigationItem)}</div>
    </NavigationButton>
  );
};
