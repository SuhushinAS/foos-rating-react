import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {NavigationItemInner} from 'modules/navigation/components/NavigationItemInner';
import {TNavigationItem} from 'modules/navigation/model/types';
import React, {useCallback} from 'react';

type TProps<T extends string | number> = {
  item: TNavigationItem<T>;
  onChange: (value: T) => void;
  value: T;
};

export const NavigationItemToggle = <T extends string | number>(props: TProps<T>) => {
  const {item, onChange, value} = props;
  const isActive = item.value === value;

  const onNavigationButtonClick = useCallback(() => {
    onChange(item.value);
  }, [item.value, onChange]);

  return (
    <NavigationButton disabled={isActive} onClick={onNavigationButtonClick}>
      <NavigationItem isActive={isActive} isCurrent={true}>
        <NavigationItemInner description={item.description} icon={item.icon} title={item.title} />
      </NavigationItem>
    </NavigationButton>
  );
};
