import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {NavigationItemInner} from 'modules/navigation/components/NavigationItemInner';
import React, {useCallback} from 'react';

type TProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  currentValue: string | number;
  onChange: (value: string | number) => void;
  value: string | number;
};

export const NavigationItemToggle = (props: TProps) => {
  const {currentValue, icon, onChange, title, value} = props;
  const isActive = currentValue === value;

  const onNavigationButtonClick = useCallback(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <NavigationItem isActive={isActive}>
        <NavigationItemInner icon={icon} title={title} />
      </NavigationItem>
    </NavigationButton>
  );
};
