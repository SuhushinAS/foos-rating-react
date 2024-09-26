import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TItem} from 'modules/navigation/components/NavigationItemList';
import {TCity, TEvent, TPlayer, TRange, TSchemeKey} from 'modules/navigation/model/types';
import React from 'react';

export const cityList: TItem[] = [
  {
    icon: <SvgIcon name="map-marker" />,
    title: 'Томск',
    value: TCity.tsk,
  },
  {
    icon: <SvgIcon name="map-marker" />,
    title: 'Новосибирск',
    value: TCity.nsk,
  },
];

export const eventList: TItem[] = [
  {
    icon: <SvgIcon name="futbol-o" />,
    title: 'Все',
    value: TEvent.full,
  },
  {
    icon: <SvgIcon name="futbol-o" />,
    title: 'Последний',
    value: TEvent.last,
  },
];

export const playerList: TItem[] = [
  {
    icon: <SvgIcon name="group" />,
    title: 'Все',
    value: TPlayer.full,
  },
  {
    icon: <SvgIcon name="group" />,
    title: 'Избранные',
    value: TPlayer.favorite,
  },
];

export const rangeList: TItem[] = [
  {
    icon: <SvgIcon name="calendar" />,
    title: 'Общий',
    value: TRange.full,
  },
  {
    icon: <SvgIcon name="calendar" />,
    title: 'Сезонный',
    value: TRange.season,
  },
];

export const schemeList: TItem[] = [
  {
    icon: <SvgIcon name="adjust" />,
    title: 'Авто',
    value: TSchemeKey.auto,
  },
  {
    icon: <SvgIcon name="moon-o" />,
    title: 'Тёмная',
    value: TSchemeKey.dark,
  },
  {
    icon: <SvgIcon name="sun-o" />,
    title: 'Светлая',
    value: TSchemeKey.light,
  },
];
