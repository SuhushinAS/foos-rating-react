import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {SvgIcon} from 'modules/common/components/SvgIcon';
import {plural} from 'modules/common/lib/plural';
import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {navigationActions} from 'modules/navigation/model/reducers';
import {selectPlayer} from 'modules/navigation/model/selectors';
import {TNavigationItem, TPlayer} from 'modules/navigation/model/types';
import {selectFavoriteCity, selectRatings} from 'modules/rating/model/selectors';
import React, {useCallback, useMemo} from 'react';

export const NavigationItemPlayer = () => {
  const favoriteCity = useAppSelector(selectFavoriteCity);
  const player = useAppSelector(selectPlayer);
  const ratings = useAppSelector(selectRatings);
  const dispatch = useAppDispatch();

  const playerCount = useMemo<number | undefined>(() => {
    if (ratings === undefined) {
      return undefined;
    }

    if (player === TPlayer.full) {
      return ratings.length;
    }

    if (favoriteCity === undefined) {
      return ratings.length;
    }

    return ratings.filter(({id}) => favoriteCity[id]).length;
  }, [favoriteCity, player, ratings]);

  const description = useMemo<string | number>(() => {
    if (playerCount === undefined) {
      return '\u00A0';
    }

    if (0 === playerCount) {
      return 'Нет игроков';
    }

    return `${playerCount} ${plural(playerCount, ['игрок', 'игрока', 'игроков'])}`;
  }, [playerCount]);

  const playerList = useMemo<TNavigationItem[]>(() => {
    return [
      {
        description,
        icon: <SvgIcon name="group" />,
        title: 'Все',
        value: TPlayer.full,
      },
      {
        description,
        icon: <SvgIcon name="group" />,
        title: 'Избранные',
        value: TPlayer.favorite,
      },
    ];
  }, [description]);

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(navigationActions.setPlayer(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={playerList} onClick={onNavigationItemClick} value={player} />;
};
