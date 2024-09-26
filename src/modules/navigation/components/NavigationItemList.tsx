import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {TNavigationItem} from 'modules/navigation/model/types';
import React, {useCallback, useMemo} from 'react';

type TProps = {
  list: TNavigationItem[];
  onClick: (value: string | number) => void;
  value: string | number;
};

export const NavigationItemList = ({list, onClick, value}: TProps) => {
  const indexMap = useMemo(() => {
    return Object.fromEntries<number>(list.map(({value}, index) => [value, index]));
  }, [list]);
  const index = indexMap[value];
  const item = list[index];

  const onNavigationButtonClick = useCallback(() => {
    const indexNext = (index + 1) % list.length;
    const itemNext = list[indexNext];

    onClick(itemNext.value);
  }, [index, list, onClick]);

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <NavigationItem description={item.description} icon={item.icon} title={item.title} />
    </NavigationButton>
  );
};
