import {useAppDispatch, useAppSelector} from 'app/hooks';
import {cityList} from 'modules/city/model/constants';
import {NavigationItemList} from 'modules/layout/components/NavigationItemList';
import {ratingActions} from 'modules/rating/model/reducers';
import {selectRatingCity} from 'modules/rating/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemCity = () => {
  const city = useAppSelector(selectRatingCity);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(ratingActions.setCity(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={cityList} onClick={onNavigationItemClick} value={city} />;
};
