import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TItem} from 'modules/layout/components/NavigationItemList';
import {TSchemeKey} from 'modules/scheme/model/types';
import React from 'react';

export const schemeList: TItem[] = [
  {
    icon: <SvgIcon name="adjust" />,
    title: 'Auto',
    value: TSchemeKey.auto,
  },
  {
    icon: <SvgIcon name="moon-o" />,
    title: 'Dark',
    value: TSchemeKey.dark,
  },
  {
    icon: <SvgIcon name="sun-o" />,
    title: 'Light',
    value: TSchemeKey.light,
  },
];
