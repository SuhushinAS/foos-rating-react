import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {SvgIcon} from 'modules/common/components/SvgIcon';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectEvent} from 'modules/navigation/model/selectors';
import {TEvent, TNavigationItem} from 'modules/navigation/model/types';
import {selectSeasonLastEventDate} from 'modules/rating/model/selectors';
import React, {useCallback, useMemo} from 'react';

export const NavigationItemEvent = () => {
  const lastEventDate = useAppSelector(selectSeasonLastEventDate);
  const event = useAppSelector(selectEvent);
  const dispatch = useAppDispatch();

  const description = useMemo<string>(() => {
    if (lastEventDate === undefined) {
      return '\u00A0';
    }

    return new Date(lastEventDate).toLocaleDateString('ru-RU');
  }, [lastEventDate]);

  const eventList = useMemo<TNavigationItem[]>(() => {
    return [
      {
        description: '\u00A0',
        icon: <SvgIcon name="futbol-o" />,
        title: 'Все',
        value: TEvent.full,
      },
      {
        description,
        icon: <SvgIcon name="futbol-o" />,
        title: 'Последний',
        value: TEvent.last,
      },
    ];
  }, [description]);

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(navigationActions.setEvent(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={eventList} onClick={onNavigationItemClick} value={event} />;
};
