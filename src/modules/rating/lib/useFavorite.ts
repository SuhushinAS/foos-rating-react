import {useAppSelector} from 'app/lib/hooks';
import {TCity} from 'modules/navigation/model/types';
import {selectRatingFavorite} from 'modules/rating/model/selectors';
import {useMemo} from 'react';

export const useFavorite = (city: TCity) => {
  const favorite = useAppSelector(selectRatingFavorite(city));

  return useMemo(() => {
    if (favorite === undefined) {
      return undefined;
    }

    const favoriteFiltered = Object.entries(favorite).filter(([, value]) => value);

    if (0 === favoriteFiltered.length) {
      return undefined;
    }

    return Object.fromEntries(favoriteFiltered);
  }, [favorite]);
};
