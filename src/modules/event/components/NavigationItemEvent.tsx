import {useAppDispatch, useAppSelector} from 'app/hooks';
import {eventList} from 'modules/event/model/constants';
import {NavigationItemList} from 'modules/layout/components/NavigationItemList';
import {ratingActions} from 'modules/rating/model/reducers';
import {selectRatingEvent} from 'modules/rating/model/selectors';
import React, {useCallback} from 'react';

export const NavigationItemEvent = () => {
  const event = useAppSelector(selectRatingEvent);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(ratingActions.setEvent(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={eventList} onClick={onNavigationItemClick} value={event} />;
};
