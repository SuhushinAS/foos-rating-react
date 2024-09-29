import {TCity} from 'modules/navigation/model/types';
import {ratingActions} from 'modules/rating/model/reducers';

export const getLoadCityKey = (city: TCity) => {
  return `${ratingActions.load.type}/${city}`;
};
