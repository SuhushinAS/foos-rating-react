import React from 'react';

export type TNavigation = {
  city: TCity;
  filter: TFilter;
  history: THistory;
  range: TRange;
  scheme: TSchemeV2;
};

export type TNavigationItem<T extends string | number = string | number> = {
  icon: React.ReactNode;
  title: string;
  value: T;
};

export type TNavigationData<T extends string | number = string | number> = Record<T, TNavigationItem<T>>;

export const enum TCity {
  nsk = 'nsk',
  tsk = 'tsk',
}

export const enum TRange {
  full = 'full',
  season = 'season',
}

export const enum TFilter {
  favorite = 'favorite',
  last = 'last',
  none = 'none',
}

export const enum TSchemeV1 {
  auto,
  dark,
  light,
}

export const enum TSchemeV2 {
  auto = 'auto',
  dark = 'dark',
  light = 'light',
}

export enum THistory {
  current = 'current',
  previous = 'previous',
}

export type TNavigationListProps<T extends string | number> = {
  list: TNavigationItem<T>[];
  onChange: (value: T) => void;
  value: T;
};
