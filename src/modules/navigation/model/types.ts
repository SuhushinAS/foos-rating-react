import React from 'react';

export type TNavigation = {
  city: TCity;
  filter: TFilter;
  range: TRange;
  scheme: TSchemeV2;
};

export type TNavigationItem<T extends string | number = string | number> = {
  description: string;
  icon: React.ReactNode;
  title: string;
  value: T;
};

export enum TCity {
  nsk = 'nsk',
  tsk = 'tsk',
}

export enum TRange {
  full = 'full',
  season = 'season',
}

export enum TFilter {
  favorite = 'favorite',
  last = 'last',
  none = 'none',
}

export enum TSchemeV1 {
  auto,
  dark,
  light,
}

export enum TSchemeV2 {
  auto = 'auto',
  dark = 'dark',
  light = 'light',
}

export type TNavigationListProps<T extends string | number> = {
  list: TNavigationItem<T>[];
  onChange: (value: T) => void;
  value: T;
};
