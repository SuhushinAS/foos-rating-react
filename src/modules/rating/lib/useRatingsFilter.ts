import {useAppSelector} from 'app/lib/hooks';
import {TCity, TFilter, TRange} from 'modules/navigation/model/types';
import {useFavorite} from 'modules/rating/lib/useFavorite';
import {selectRatings} from 'modules/rating/model/selectors';
import {TRating} from 'modules/rating/model/types';
import {useMemo} from 'react';

type TFavorite = Record<string, boolean>;

const getFilterRatings = (ratings: TRating[], filter: TFilter, favorite?: TFavorite) => {
  switch (filter) {
    case TFilter.favorite:
      if (!favorite) {
        return [];
      }

      return ratings.filter(({id}) => {
        return favorite[id];
      });
    case TFilter.last:
      return ratings.filter(({wasInLastEvent}) => {
        return wasInLastEvent;
      });
    case TFilter.none:
    default:
      return ratings;
  }
};

export const useRatingsFilter = (city: TCity, range: TRange, filter: TFilter): TRating[] => {
  const ratings = useAppSelector(selectRatings(city, range));
  const favorite = useFavorite(city);

  return useMemo(() => {
    if (ratings === undefined) {
      return [];
    }

    return getFilterRatings(ratings, filter, favorite);
  }, [favorite, filter, ratings]);
};
