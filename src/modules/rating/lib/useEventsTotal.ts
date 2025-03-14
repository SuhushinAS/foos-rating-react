import {TCity, TRange} from 'modules/navigation/model/types';
import {useRatingRange} from 'modules/rating/lib/useRatingRange';

export const useEventsTotal = (city: TCity, range: TRange) => {
  const ratingRange = useRatingRange(city, range);

  return ratingRange?.eventsTotal;
};
