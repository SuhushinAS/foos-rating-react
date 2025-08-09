import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {compare} from 'modules/common/lib/compare';
import {selectConfigUrls} from 'modules/config/model/selectors';
import {TCity, TRange} from 'modules/navigation/model/types';
import {filterRating} from 'modules/rating/lib/filterRating';
import {getRating} from 'modules/rating/lib/getRating';
import {useLoadCityKey} from 'modules/rating/lib/useLoadCityKey';
import {ratingActions} from 'modules/rating/model/reducers';
import {TRatingCity, TRatingDataAPI, TRatingRange, TRatingSeasonDataAPI} from 'modules/rating/model/types';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import {statusActions} from 'modules/status/model/reducers';
import {useEffect} from 'react';

const getRatingRange = (rating: TRatingDataAPI): TRatingRange => {
  const ratings = getRating({filterRating, ratingList: rating.ratings});
  const ratingData = rating.ratings.reduce((acc, rating, index) => {
    const position = index + 1;

    acc[rating.id] = {
      ...rating,
      position,
    };

    return acc;
  }, {});
  const ratingIdList = rating.ratings.filter(filterRating).map((rating) => {
    return rating.id;
  });
  const ratingIdListPrev = ratingIdList.toSorted((idA, idB) => {
    const rating2A = ratingData[idA];
    const rating2B = ratingData[idB];
    const valuePrevA = rating2A.value - rating2A.valueChange;
    const valuePrevB = rating2B.value - rating2B.valueChange;

    if (valuePrevB === valuePrevA) {
      return rating2B.position - rating2A.position + rating2B.positionChange - rating2A.positionChange;
    }

    return valuePrevB - valuePrevA;
  });

  const positionMap = ratingIdList.reduce((acc, id, index) => {
    acc[id] = {
      position: index + 1,
    };

    return acc;
  }, {});
  ratingIdListPrev.forEach((id, index) => {
    const positionItem = positionMap[id];
    const positionPrev = index + 1;

    positionItem.positionPrev = positionPrev;
    positionItem.positionChange = positionPrev - positionItem.position;
  });

  const t1 = ratings.map((rating) => {
    return {
      id: rating.id,
      position: rating.position,
      positionChange: rating.positionChange,
    };
  });
  const t2 = ratingIdList.map((id) => {
    const {position, positionChange} = positionMap[id];
    return {
      id,
      position,
      positionChange,
    };
  });
  console.log(compare(t1, t2));

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
