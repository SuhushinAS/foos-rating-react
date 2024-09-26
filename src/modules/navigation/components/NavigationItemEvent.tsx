import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {eventList} from 'modules/navigation/model/constants';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectEvent} from 'modules/navigation/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemEvent = () => {
  const event = useAppSelector(selectEvent);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(navigationActions.setEvent(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={eventList} onClick={onNavigationItemClick} value={event} />;
};
