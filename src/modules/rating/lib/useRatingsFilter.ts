import {TCity, TFilter, TRange} from 'modules/navigation/model/types';
import {useFavorite} from 'modules/rating/lib/useFavorite';
import {useRatings} from 'modules/rating/lib/useRatings';
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
  const ratings = useRatings(city, range);
  const favorite = useFavorite(city);

  return useMemo(() => {
    return getFilterRatings(ratings, filter, favorite);
  }, [favorite, filter, ratings]);
};
