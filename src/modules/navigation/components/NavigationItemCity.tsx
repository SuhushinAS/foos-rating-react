import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {cityList} from 'modules/navigation/model/constants';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectCity} from 'modules/navigation/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemCity = () => {
  const city = useAppSelector(selectCity);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (city) => {
      dispatch(navigationActions.setCity(city));
    },
    [dispatch]
  );

  return <NavigationItemList list={cityList} onClick={onNavigationItemClick} value={city} />;
};
