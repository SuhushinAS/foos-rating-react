import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {SvgIcon} from 'modules/common/components/SvgIcon';
import {plural} from 'modules/common/lib/plural';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectCity} from 'modules/navigation/model/selectors';
import {TCity, TNavigationItem} from 'modules/navigation/model/types';
import {selectEventsTotal} from 'modules/rating/model/selectors';
import React, {useCallback, useMemo} from 'react';

export const NavigationItemCity = () => {
  const city = useAppSelector(selectCity);
  const eventsTotal = useAppSelector(selectEventsTotal);
  const dispatch = useAppDispatch();

  const description = useMemo<string | number>(() => {
    if (eventsTotal === undefined) {
      return '\u00A0';
    }

    return `${eventsTotal} ${plural(eventsTotal, ['игра', 'игры', 'игр'])}`;
  }, [eventsTotal]);

  const cityList = useMemo<TNavigationItem[]>(() => {
    return [
      {
        description,
        icon: <SvgIcon name="map-marker" />,
        title: 'Томск',
        value: TCity.tsk,
      },
      {
        description,
        icon: <SvgIcon name="map-marker" />,
        title: 'Новосибирск',
        value: TCity.nsk,
      },
    ];
  }, [description]);

  const onNavigationItemClick = useCallback(
    (city) => {
      dispatch(navigationActions.setCity(city));
    },
    [dispatch]
  );

  return <NavigationItemList list={cityList} onClick={onNavigationItemClick} value={city} />;
};
