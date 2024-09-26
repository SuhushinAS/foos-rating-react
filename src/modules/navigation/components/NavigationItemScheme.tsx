import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {schemeList} from 'modules/navigation/model/constants';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectScheme} from 'modules/navigation/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemScheme = () => {
  const scheme = useAppSelector(selectScheme);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(navigationActions.setScheme(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={schemeList} onClick={onNavigationItemClick} value={scheme} />;
};
