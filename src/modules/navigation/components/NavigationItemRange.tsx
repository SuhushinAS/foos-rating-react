import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {rangeList} from 'modules/navigation/model/constants';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectRange} from 'modules/navigation/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemRange = () => {
  const range = useAppSelector(selectRange);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(navigationActions.setRange(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={rangeList} onClick={onNavigationItemClick} value={range} />;
};
