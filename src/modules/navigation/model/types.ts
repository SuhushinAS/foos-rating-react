import React from 'react';

export type TNavigation = {
  city: TCity;
  event: TEvent;
  player: TPlayer;
  range: TRange;
  scheme: TSchemeKey;
};

export type TNavigationItem = {
  icon: React.ReactNode;
  description: React.ReactNode;
  title: React.ReactNode;
  value: string | number;
};

export enum TCity {
  nsk = 'nsk',
  tsk = 'tsk',
}

export enum TEvent {
  full = 'full',
  last = 'last',
}

export enum TPlayer {
  full = 'full',
  favorite = 'favorite',
}

export enum TRange {
  full = 'full',
  season = 'season',
}

export enum TSchemeKey {
  auto,
  dark,
  light,
}
