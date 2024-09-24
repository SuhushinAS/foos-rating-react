import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TItem} from 'modules/layout/components/NavigationItemList';
import {TRangeKey} from 'modules/range/model/types';
import React from 'react';

export const rangeList: TItem[] = [
  {
    icon: <SvgIcon name="calendar" />,
    title: 'Full',
    value: TRangeKey.full,
  },
  {
    icon: <SvgIcon name="calendar" />,
    title: 'Season',
    value: TRangeKey.season,
  },
];
