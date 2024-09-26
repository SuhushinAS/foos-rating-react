import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {TCity} from 'modules/navigation/model/types';
import {ratingActions} from 'modules/rating/model/reducers';
import {TRatingCity, TRatingDataAPI, TRatingSeasonDataAPI} from 'modules/rating/model/types';
import {statusActions} from 'modules/status/reducers';
import {selectLoadItem} from 'modules/status/selectors';
import {useEffect} from 'react';

const cityMap = {
  [TCity.nsk]: '/nsk',
  [TCity.tsk]: '/tsk',
};

const PATH_FULL = '/api/ratings';
const PATH_SEASON = '/api/ratings/season';

const getRating = (rating, index) => {
  return {
    ...rating,
    position: index + 1,
  };
};

const getLoadCityKet = (city: TCity) => {
  return `${ratingActions.load.type}/${city}`;
};

export const useRatingCityLoad = (city: TCity) => {
  const dispatch = useAppDispatch();
  const loadKey = getLoadCityKet(city);
  const load = useAppSelector(selectLoadItem(loadKey));

  useEffect(() => {
    if (undefined === load) {
      const host = cityMap[city];
      const urlRatingsFull = `${host}${PATH_FULL}`;
      const urlRatingsSeason = `${host}${PATH_SEASON}`;

      dispatch(statusActions.loadStart(loadKey));

      Promise.all([api.request<TRatingDataAPI>(urlRatingsFull), api.request<TRatingSeasonDataAPI>(urlRatingsSeason)]).then(([full, season]) => {
        const rating: Partial<TRatingCity> = {
          lastEvent: full.lastEvent,
          ratings: full.ratings.map(getRating),
          season: season.ratings.map(getRating),
          seasonStartDate: season.seasonStartDate,
        };

        dispatch(ratingActions.setRating({city, rating}));
        dispatch(statusActions.loadStop(loadKey));
      });
    }
  }, [city, dispatch, load, loadKey]);
};
