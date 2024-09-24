import {useAppDispatch, useAppSelector} from 'app/hooks';
import {NavigationItemList} from 'modules/layout/components/NavigationItemList';
import {rangeList} from 'modules/range/model/constants';
import {ratingActions} from 'modules/rating/model/reducers';
import {selectRatingRange} from 'modules/rating/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemRange = () => {
  const range = useAppSelector(selectRatingRange);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(ratingActions.setRange(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={rangeList} onClick={onNavigationItemClick} value={range} />;
};
