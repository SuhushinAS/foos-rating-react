import {useAppSelector} from 'app/lib/hooks';
import {TCity, TRange} from 'modules/navigation/model/types';
import {selectEventsTotal} from 'modules/rating/model/selectors';

export const useEventsTotal = (city: TCity, range: TRange) => {
  return useAppSelector(selectEventsTotal(city, range));
};
