import {useAppSelector} from 'app/lib/hooks';
import {NavigationItemPlayerInner} from 'modules/navigation/components/NavigationItemPlayerInner';
import {selectFavoriteCity} from 'modules/rating/model/selectors';
import React from 'react';

export const NavigationItemPlayer = () => {
  const favoriteCity = useAppSelector(selectFavoriteCity);

  if (favoriteCity === undefined) {
    return null;
  }

  return <NavigationItemPlayerInner favoriteCity={favoriteCity} />;
};
