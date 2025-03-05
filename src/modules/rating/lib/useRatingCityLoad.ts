import {useAppDispatch} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {TCity, TRange} from 'modules/navigation/model/types';
import {useLoadCityKey} from 'modules/rating/lib/useLoadCityKey';
import {ratingActions} from 'modules/rating/model/reducers';
import {TRatingAPI, TRatingCity, TRatingDataAPI, TRatingSeasonDataAPI} from 'modules/rating/model/types';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import {statusActions} from 'modules/status/model/reducers';
import {useEffect} from 'react';

const cityMap = {
  [TCity.nsk]: '/nsk',
  [TCity.tsk]: '/tsk',
};

const PATH_FULL = '/api/ratings';
const PATH_SEASON = '/api/ratings/season';

const getRating = (rating: TRatingAPI, index: number) => {
  return {
    ...rating,
    position: index + 1,
  };
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
                ratings: full.ratings.map(getRating),
              },
              [TRange.season]: {
                eventsTotal: season.eventsTotal,
                ratings: season.ratings.map(getRating),
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
