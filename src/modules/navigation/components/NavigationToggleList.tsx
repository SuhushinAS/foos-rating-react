import 'modules/navigation/components/Navigation.less';
import {NavigationItemToggle} from 'modules/navigation/components/NavigationItemToggle';
import {TNavigationListProps} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationToggleList = <T extends string | number>({list, onChange, value}: TNavigationListProps<T>) => {
  return (
    <>
      {list.map((item) => {
        return <NavigationItemToggle item={item} key={item.value} onChange={onChange} value={value} />;
      })}
    </>
  );
};
