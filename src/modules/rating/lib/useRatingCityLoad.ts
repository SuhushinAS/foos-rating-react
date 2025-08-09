import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {selectConfigUrls} from 'modules/config/model/selectors';
import {TCity, TRange} from 'modules/navigation/model/types';
import {getPositionMap} from 'modules/rating/lib/getPositionMap';
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

const getRatingPosition = (rating: TRatingAPI, index: number): TRating => {
  return {
    ...rating,
    position: index + 1,
  };
};

export const filterRating = ({eventsPlayed}: TRatingAPI) => {
  return 0 !== eventsPlayed;
};

const getRatingRange = (rating: TRatingDataAPI): TRatingRange => {
  const ratingListFiltered = rating.ratings.map(getRatingPosition).filter(filterRating);
  const positionMap = getPositionMap(ratingListFiltered);
  const ratings = ratingListFiltered.map((rating) => {
    const {position, positionChange} = positionMap[rating.id];

    return {
      ...rating,
      position,
      positionChange,
    };
  });

  return {
    eventsTotal: rating.eventsTotal,
    ratings,
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
