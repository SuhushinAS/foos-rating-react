import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TNavigationItem, TSchemeKey} from 'modules/navigation/model/types';
import React from 'react';

export const schemeList: TNavigationItem[] = [
  {
    description: '\u00A0',
    icon: <SvgIcon name="adjust" />,
    title: 'Авто',
    value: TSchemeKey.auto,
  },
  {
    description: '\u00A0',
    icon: <SvgIcon name="moon-o" />,
    title: 'Тёмная',
    value: TSchemeKey.dark,
  },
  {
    description: '\u00A0',
    icon: <SvgIcon name="sun-o" />,
    title: 'Светлая',
    value: TSchemeKey.light,
  },
];
