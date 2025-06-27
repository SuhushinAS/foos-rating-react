import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {selectConfigUrls} from 'modules/config/model/selectors';
import {TCity, TRange} from 'modules/navigation/model/types';
import {useLoadCityKey} from 'modules/rating/lib/useLoadCityKey';
import {ratingActions} from 'modules/rating/model/reducers';
import {
  TRating,
  TRatingAPI,
  TRatingCity,
  TRatingDataAPI,
  TRatingRange,
  TRatingSeasonDataAPI,
} from 'modules/rating/model/types';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import {statusActions} from 'modules/status/model/reducers';
import {useEffect} from 'react';

const getRatingListPrev = (acc: TRatingAPI[], rating: TRatingAPI, index: number) => {
  acc[index + rating.positionChange] = rating;

  return acc;
};

const filterRating = ({eventsPlayed}: TRatingAPI) => {
  return 0 !== eventsPlayed;
};

const getRatingPositionMap = (acc: Record<number, number>, rating: TRatingAPI, index: number) => {
  acc[rating.id] = index + 1;

  return acc;
};

const getRatingListWithPositions = (ratingList: TRatingAPI[]) => {
  const ratingPositionPrevMap = ratingList
    .reduce(getRatingListPrev, [])
    .filter(filterRating)
    .reduce(getRatingPositionMap, {});

  return ratingList.filter(filterRating).reduce<TRating[]>((acc, rating, index) => {
    const position = index + 1;
    const positionPrev = ratingPositionPrevMap[rating.id];

    acc.push({
      ...rating,
      position,
      positionChange: positionPrev - position,
    });

    return acc;
  }, []);
};

const getRatingRange = (rating: TRatingDataAPI): TRatingRange => {
  return {
    eventsTotal: rating.eventsTotal,
    ratings: getRatingListWithPositions(rating.ratings),
  };
};

export const useRatingCityLoad = (city: TCity) => {
  const dispatch = useAppDispatch();
  const loadKey = useLoadCityKey(city);
  const load = useLoadItem(loadKey);
  const urls = useAppSelector(selectConfigUrls);

  useEffect(() => {
    if (undefined === load) {
      const {full, season} = urls[city];

      dispatch(statusActions.loadStart(loadKey));

      Promise.all([api.request<TRatingDataAPI>(full), api.request<TRatingSeasonDataAPI>(season)])
        .then(([full, season]) => {
          const rating: TRatingCity = {
            lastEvent: full.lastEvent,
            rangeData: {
              [TRange.full]: getRatingRange(full),
              [TRange.season]: getRatingRange(season),
            },
            seasonStartDate: season.seasonStartDate,
          };

          dispatch(ratingActions.setRating({city, rating}));
        })
        .finally(() => {
          dispatch(statusActions.loadStop(loadKey));
        });
    }
  }, [city, dispatch, load, loadKey, urls]);
};
