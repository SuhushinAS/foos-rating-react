import {TCityKey} from 'modules/city/model/types';
import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TItem} from 'modules/layout/components/NavigationItemList';
import React from 'react';

export const cityList: TItem[] = [
  {
    icon: <SvgIcon name="home" />,
    title: 'Tsk',
    value: TCityKey.tsk,
  },
  {
    icon: <SvgIcon name="home" />,
    title: 'Nsk',
    value: TCityKey.nsk,
  },
];
