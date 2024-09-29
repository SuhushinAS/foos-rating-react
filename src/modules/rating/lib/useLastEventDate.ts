import {TCity} from 'modules/navigation/model/types';
import {useLastEvent} from 'modules/rating/lib/useLastEvent';

export const useLastEventDate = (city: TCity) => {
  const lastEvent = useLastEvent(city);

  return lastEvent?.date;
};
