import {schemeMap} from 'modules/navigation/model/constants';
import {TCity, TFilter, THistory, TNavigation, TRange, TSchemeV2} from 'modules/navigation/model/types';
import {storageKeyV1, storageKeyV2, storageKeyV3} from 'modules/rating/model/constants';
import {TRatingStoreV1, TRatingStoreV2} from 'modules/rating/model/types';

export type InitStoreV2 = {
  navigation: TNavigation;
  rating: TRatingStoreV2;
};

const initStoreDefault: InitStoreV2 = {
  navigation: {
    city: TCity.tsk,
    filter: TFilter.none,
    history: THistory.current,
    range: TRange.full,
    scheme: TSchemeV2.auto,
  },
  rating: {
    cityData: {},
    favoriteData: {},
  },
};

const getInitStore = (key: string, transform: (state: any) => InitStoreV2): InitStoreV2 | null => {
  const stateString = localStorage.getItem(key);

  if (null !== stateString) {
    try {
      const state = JSON.parse(stateString);

      return transform(state);
    } catch (error) {
      console.warn(error);

      return null;
    }
  }

  return null;
};

const transformV3 = (state: InitStoreV2): InitStoreV2 => {
  return state;
};

const transformV2 = (state: TRatingStoreV2): InitStoreV2 => {
  return {
    navigation: initStoreDefault.navigation,
    rating: state,
  };
};

const transformV1Filter = ({isFavorite, isLast}: TRatingStoreV1): TFilter => {
  if (isFavorite) {
    return TFilter.favorite;
  }
  if (isLast) {
    return TFilter.last;
  }

  return TFilter.none;
};

const transformV1Range = ({isSeason}: TRatingStoreV1): TRange => {
  if (isSeason) {
    return TRange.season;
  }

  return TRange.full;
};

const transformV1Scheme = ({scheme}: TRatingStoreV1): TSchemeV2 => {
  if (scheme === undefined) {
    return initStoreDefault.navigation.scheme;
  }

  return schemeMap[scheme];
};

const transformV1 = (state: TRatingStoreV1): InitStoreV2 => {
  return {
    navigation: {
      ...initStoreDefault.navigation,
      filter: transformV1Filter(state),
      range: transformV1Range(state),
      scheme: transformV1Scheme(state),
    },
    rating: initStoreDefault.rating,
  };
};

export const initStore = ((): InitStoreV2 => {
  const stateV3 = getInitStore(storageKeyV3, transformV3);

  if (null !== stateV3) {
    return stateV3;
  }

  const stateV2 = getInitStore(storageKeyV2, transformV2);

  if (null !== stateV2) {
    localStorage.removeItem(storageKeyV2);
    return stateV2;
  }

  const stateV1 = getInitStore(storageKeyV1, transformV1);

  if (null !== stateV1) {
    localStorage.removeItem(storageKeyV1);
    return stateV1;
  }

  return initStoreDefault;
})();
