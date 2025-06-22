import {useAppDispatch} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {TCity, TRange} from 'modules/navigation/model/types';
import {useLoadCityKey} from 'modules/rating/lib/useLoadCityKey';
import {ratingActions} from 'modules/rating/model/reducers';
import {TRating, TRatingAPI, TRatingCity, TRatingDataAPI, TRatingSeasonDataAPI} from 'modules/rating/model/types';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import {statusActions} from 'modules/status/model/reducers';
import {useEffect} from 'react';

const cityMap = {
  [TCity.nsk]: '/nsk',
  [TCity.tsk]: '/tsk',
};

const PATH_FULL = '/api/ratings';
const PATH_SEASON = '/api/ratings/season';

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

export const useRatingCityLoad = (city: TCity) => {
  const dispatch = useAppDispatch();
  const loadKey = useLoadCityKey(city);
  const load = useLoadItem(loadKey);

  useEffect(() => {
    if (undefined === load) {
      const host = cityMap[city];
      const urlRatingsFull = `${host}${PATH_FULL}`;
      const urlRatingsSeason = `${host}${PATH_SEASON}`;

      dispatch(statusActions.loadStart(loadKey));

      Promise.all([api.request<TRatingDataAPI>(urlRatingsFull), api.request<TRatingSeasonDataAPI>(urlRatingsSeason)])
        .then(([full, season]) => {
          const rating: TRatingCity = {
            lastEvent: full.lastEvent,
            rangeData: {
              [TRange.full]: {
                eventsTotal: full.eventsTotal,
                ratings: getRatingListWithPositions(full.ratings),
              },
              [TRange.season]: {
                eventsTotal: season.eventsTotal,
                ratings: getRatingListWithPositions(season.ratings),
              },
            },
            seasonStartDate: season.seasonStartDate,
          };

          dispatch(ratingActions.setRating({city, rating}));
        })
        .finally(() => {
          dispatch(statusActions.loadStop(loadKey));
        });
    }
  }, [city, dispatch, load, loadKey]);
};
