import {NavigationItem} from 'modules/navigation/components/NavigationItem';
import {TNavigationItem} from 'modules/navigation/model/types';
import React, {useMemo} from 'react';
import 'modules/rating/components/RatingFavoriteListItem.less';

type TProps = {
  isActive: boolean;
  item: TNavigationItem<number>;
};

export const RatingFavoriteListItem = ({isActive, item}: TProps) => {
  const className = useMemo(() => {
    const classList = ['RatingFavoriteListItem'];

    if (item.value) {
      classList.push('RatingFavoriteListItem_Active');
    }

    return classList.join(' ');
  }, [isActive]);

  return (
    <NavigationItem isActive={isActive} key={item.value}>
      <div className={className}>{item.icon}</div>
    </NavigationItem>
  );
};
