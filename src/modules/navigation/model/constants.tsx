import {SvgIcon} from 'modules/common/components/SvgIcon';
import {
  TCity,
  TFilter,
  TNavigation,
  TNavigationItem,
  TRange,
  TSchemeV1,
  TSchemeV2,
} from 'modules/navigation/model/types';
import React from 'react';

export const defaultValues: TNavigation = {
  city: TCity.tsk,
  filter: TFilter.none,
  range: TRange.full,
  scheme: TSchemeV2.auto,
};

export const schemeMap = {
  [TSchemeV1.auto]: TSchemeV2.auto,
  [TSchemeV1.dark]: TSchemeV2.dark,
  [TSchemeV1.light]: TSchemeV2.light,
};

export const cityList: TNavigationItem<TCity>[] = [
  {
    icon: <SvgIcon name="map-marker" />,
    title: 'Nsk',
    value: TCity.nsk,
  },
  {
    icon: <SvgIcon name="map-marker" />,
    title: 'Tsk',
    value: TCity.tsk,
  },
];

export const filterList: TNavigationItem<TFilter>[] = [
  {
    icon: <SvgIcon name="group" />,
    title: 'Все игроки',
    value: TFilter.none,
  },
  {
    icon: <SvgIcon name="futbol-o" />,
    title: 'Последняя игра',
    value: TFilter.last,
  },
  {
    icon: <SvgIcon name="star" />,
    title: 'Избранные игроки',
    value: TFilter.favorite,
  },
];

export const rangeList: TNavigationItem<TRange>[] = [
  {
    icon: <SvgIcon name="calendar-o" />,
    title: 'Общий рейтинг',
    value: TRange.full,
  },
  {
    icon: <SvgIcon name="calendar" />,
    title: 'Сезоный рейтинг',
    value: TRange.season,
  },
];

export const schemeList: TNavigationItem<TSchemeV2>[] = [
  {
    icon: <SvgIcon name="adjust" />,
    title: 'Авто тема',
    value: TSchemeV2.auto,
  },
  {
    icon: <SvgIcon name="moon-o" />,
    title: 'Тёмная тема',
    value: TSchemeV2.dark,
  },
  {
    icon: <SvgIcon name="sun-o" />,
    title: 'Светлая тема',
    value: TSchemeV2.light,
  },
];
