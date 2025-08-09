import {SvgIcon} from 'modules/common/components/SvgIcon';
import {
  TCity,
  TFilter,
  THistory,
  TNavigationData,
  TNavigationItem,
  TRange,
  TSchemeV1,
  TSchemeV2,
} from 'modules/navigation/model/types';
import React from 'react';

export const schemeMap = {
  [TSchemeV1.auto]: TSchemeV2.auto,
  [TSchemeV1.dark]: TSchemeV2.dark,
  [TSchemeV1.light]: TSchemeV2.light,
};

export const cityData: TNavigationData<TCity> = {
  [TCity.nsk]: {
    icon: <SvgIcon name="map-marker" />,
    title: 'Nsk',
    value: TCity.nsk,
  },
  [TCity.tsk]: {
    icon: <SvgIcon name="map-marker" />,
    title: 'Tsk',
    value: TCity.tsk,
  },
};

export const cityList: TNavigationItem<TCity>[] = [cityData[TCity.nsk], cityData[TCity.tsk]];

export const filterData: TNavigationData<TFilter> = {
  [TFilter.none]: {
    icon: <SvgIcon name="group" />,
    title: 'Все',
    value: TFilter.none,
  },
  [TFilter.last]: {
    icon: <SvgIcon name="futbol-o" />,
    title: 'Игра',
    value: TFilter.last,
  },
  [TFilter.favorite]: {
    icon: <SvgIcon name="star" />,
    title: 'Избранные',
    value: TFilter.favorite,
  },
};

export const rangeData: TNavigationData<TRange> = {
  [TRange.full]: {
    icon: <SvgIcon name="calendar-o" />,
    title: 'Общий',
    value: TRange.full,
  },
  [TRange.season]: {
    icon: <SvgIcon name="calendar" />,
    title: 'Сезон',
    value: TRange.season,
  },
};

export const schemeData: TNavigationData<TSchemeV2> = {
  [TSchemeV2.auto]: {
    icon: <SvgIcon name="adjust" />,
    title: 'Авто',
    value: TSchemeV2.auto,
  },
  [TSchemeV2.dark]: {
    icon: <SvgIcon name="moon-o" />,
    title: 'Тёмная',
    value: TSchemeV2.dark,
  },
  [TSchemeV2.light]: {
    icon: <SvgIcon name="sun-o" />,
    title: 'Светлая',
    value: TSchemeV2.light,
  },
};

export const schemeList: TNavigationItem<TSchemeV2>[] = [
  schemeData[TSchemeV2.auto],
  schemeData[TSchemeV2.dark],
  schemeData[TSchemeV2.light],
];

export const historyList: TNavigationItem<THistory>[] = [
  {
    icon: <SvgIcon name="current" />,
    title: 'Стало',
    value: THistory.current,
  },
  {
    icon: <SvgIcon name="previous" />,
    title: 'Было',
    value: THistory.previous,
  },
];
