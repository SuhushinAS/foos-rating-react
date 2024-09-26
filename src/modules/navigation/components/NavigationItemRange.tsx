import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {SvgIcon} from 'modules/common/components/SvgIcon';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectRange} from 'modules/navigation/model/selectors';
import {TNavigationItem, TRange} from 'modules/navigation/model/types';
import {selectSeasonStartDate} from 'modules/rating/model/selectors';
import React, {useCallback, useMemo} from 'react';

export const NavigationItemRange = () => {
  const seasonStartDate = useAppSelector(selectSeasonStartDate);
  const range = useAppSelector(selectRange);
  const dispatch = useAppDispatch();

  const description = useMemo<string>(() => {
    if (seasonStartDate === undefined) {
      return '\u00A0';
    }

    return new Date(seasonStartDate).toLocaleDateString('ru-RU');
  }, [seasonStartDate]);

  const rangeList = useMemo<TNavigationItem[]>(() => {
    return [
      {
        description: '\u00A0',
        icon: <SvgIcon name="calendar" />,
        title: 'Общий',
        value: TRange.full,
      },
      {
        description,
        icon: <SvgIcon name="calendar" />,
        title: 'Сезонный',
        value: TRange.season,
      },
    ];
  }, [description]);

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(navigationActions.setRange(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={rangeList} onClick={onNavigationItemClick} value={range} />;
};
