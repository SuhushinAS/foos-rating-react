import {TState} from 'app/model/types';
import {navigation} from 'modules/navigation/model/reducers';
import {TCity, TEvent, TNavigation, TPlayer, TRange, TSchemeKey} from 'modules/navigation/model/types';

export const selectNavigation = (state: TState): TNavigation => {
  return state[navigation.name];
};

export const selectCity = (state: TState): TCity => {
  return selectNavigation(state).city;
};

export const selectEvent = (state: TState): TEvent => {
  return selectNavigation(state).event;
};

export const selectPlayer = (state: TState): TPlayer => {
  return selectNavigation(state).player;
};

export const selectRange = (state: TState): TRange => {
  return selectNavigation(state).range;
};

export const selectScheme = (state: TState): TSchemeKey => {
  return selectNavigation(state).scheme;
};
