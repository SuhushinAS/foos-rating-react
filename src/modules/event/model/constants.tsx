import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TEventKey} from 'modules/event/model/types';
import {TItem} from 'modules/layout/components/NavigationItemList';
import React from 'react';

export const eventList: TItem[] = [
  {
    icon: <SvgIcon name="history" />,
    title: 'Full',
    value: TEventKey.full,
  },
  {
    icon: <SvgIcon name="history" />,
    title: 'Last',
    value: TEventKey.last,
  },
];
