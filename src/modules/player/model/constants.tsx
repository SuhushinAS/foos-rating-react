import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TItem} from 'modules/layout/components/NavigationItemList';
import {TPlayerKey} from 'modules/player/model/types';
import React from 'react';

export const playerList: TItem[] = [
  {
    icon: <SvgIcon name="star" />,
    title: 'Full',
    value: TPlayerKey.full,
  },
  {
    icon: <SvgIcon name="star" />,
    title: 'Favorite',
    value: TPlayerKey.favorite,
  },
];
