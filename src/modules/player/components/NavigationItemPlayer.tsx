import {useAppDispatch, useAppSelector} from 'app/hooks';
import {NavigationItemList} from 'modules/layout/components/NavigationItemList';
import {playerList} from 'modules/player/model/constants';
import {ratingActions} from 'modules/rating/model/reducers';
import {selectRatingPlayer} from 'modules/rating/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemPlayer = () => {
  const player = useAppSelector(selectRatingPlayer);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(ratingActions.setPlayer(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={playerList} onClick={onNavigationItemClick} value={player} />;
};
