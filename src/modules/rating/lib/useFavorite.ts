import {TCity} from 'modules/navigation/model/types';
import {useFavoriteData} from 'modules/rating/lib/useFavoriteData';
import {useMemo} from 'react';

export const useFavorite = (city: TCity) => {
  const favoriteData = useFavoriteData();
  const favoriteCity = favoriteData[city];

  return useMemo(() => {
    if (favoriteCity === undefined) {
      return undefined;
    }

    const favoriteCityFiltered = Object.entries(favoriteCity).filter(([, value]) => value);

    if (0 === favoriteCityFiltered.length) {
      return undefined;
    }

    return Object.fromEntries(favoriteCityFiltered);
  }, [favoriteCity]);
};
