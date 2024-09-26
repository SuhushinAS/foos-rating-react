import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {playerList} from 'modules/navigation/model/constants';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectPlayer} from 'modules/navigation/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemPlayer = () => {
  const player = useAppSelector(selectPlayer);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(navigationActions.setPlayer(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={playerList} onClick={onNavigationItemClick} value={player} />;
};
