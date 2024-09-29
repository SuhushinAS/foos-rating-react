import {TCity, TFilter, TRange} from 'modules/navigation/model/types';
import {useFavorite} from 'modules/rating/lib/useFavorite';
import {useRatings} from 'modules/rating/lib/useRatings';
import {TRating} from 'modules/rating/model/types';
import {useMemo} from 'react';

export const useRatingsFilter = (city: TCity, range: TRange, filter: TFilter): TRating[] => {
  const ratings = useRatings(city, range);
  const favorite = useFavorite(city);

  return useMemo(() => {
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
  }, [favorite, filter, ratings]);
};
