import {TState} from 'app/model/types';
import {navigation} from 'modules/navigation/model/reducers';
import {TCity, TFilter, THistory, TNavigation, TRange, TSchemeV2} from 'modules/navigation/model/types';

export const selectNavigation = (state: TState): TNavigation => {
  return state[navigation.name];
};

export const selectNavigationCity = (state: TState): TCity => {
  return selectNavigation(state).city;
};

export const selectNavigationFilter = (state: TState): TFilter => {
  return selectNavigation(state).filter;
};

export const selectNavigationHistory = (state: TState): THistory => {
  return selectNavigation(state).history;
};

export const selectNavigationRange = (state: TState): TRange => {
  return selectNavigation(state).range;
};

export const selectNavigationScheme = (state: TState): TSchemeV2 => {
  return selectNavigation(state).scheme;
};
