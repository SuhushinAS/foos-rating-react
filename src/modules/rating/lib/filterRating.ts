import {TRatingAPI} from 'modules/rating/model/types';

export type FilterRating = <T extends TRatingAPI>(rating: T) => boolean;

export const filterRating: FilterRating = ({eventsPlayed}) => {
  return 0 !== eventsPlayed;
};
