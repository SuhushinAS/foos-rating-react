export type TNavigation = {
  city: TCity;
  event: TEvent;
  player: TPlayer;
  range: TRange;
  scheme: TSchemeKey;
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
