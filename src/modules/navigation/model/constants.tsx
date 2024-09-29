import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TCity, TFilter, TNavigation, TNavigationItem, TRange, TSchemeV1, TSchemeV2} from 'modules/navigation/model/types';
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
    title: 'Новосибирск',
    value: TCity.nsk,
  },
  {
    icon: <SvgIcon name="map-marker" />,
    title: 'Томск',
    value: TCity.tsk,
  },
];

export const filterList: TNavigationItem<TFilter>[] = [
  {
    icon: <SvgIcon name="group" />,
    title: 'Все',
    value: TFilter.none,
  },
  {
    icon: <SvgIcon name="futbol-o" />,
    title: 'Последние',
    value: TFilter.last,
  },
  {
    icon: <SvgIcon name="star" />,
    title: 'Избранные',
    value: TFilter.favorite,
  },
];

export const rangeList: TNavigationItem<TRange>[] = [
  {
    icon: <SvgIcon name="calendar-o" />,
    title: 'Общий',
    value: TRange.full,
  },
  {
    icon: <SvgIcon name="calendar" />,
    title: 'Сезонный',
    value: TRange.season,
  },
];

export const schemeList: TNavigationItem<TSchemeV2>[] = [
  {
    icon: <SvgIcon name="adjust" />,
    title: 'Авто',
    value: TSchemeV2.auto,
  },
  {
    icon: <SvgIcon name="moon-o" />,
    title: 'Тёмная',
    value: TSchemeV2.dark,
  },
  {
    icon: <SvgIcon name="sun-o" />,
    title: 'Светлая',
    value: TSchemeV2.light,
  },
];
