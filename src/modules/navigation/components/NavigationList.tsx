import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import 'modules/navigation/components/NavigationList.less';
import {NavigationListItem} from 'modules/navigation/components/NavigationListItem';
import {useIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useNextClick} from 'modules/navigation/lib/useNextClick';
import {TNavigationListProps} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationList = <T extends string | number>({list, onChange, value}: TNavigationListProps<T>) => {
  const indexMap = useIndexMap(list);
  const currentIndex = indexMap[value];

  const onNavigationButtonClick = useNextClick(list, onChange, currentIndex);

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <div className="NavigationList">
        {list.map((item) => (
          <NavigationListItem isActive={item.value === value} item={item} key={item.value} />
        ))}
      </div>
    </NavigationButton>
  );
};
