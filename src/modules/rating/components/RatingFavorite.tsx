import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {useIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useNextClick} from 'modules/navigation/lib/useNextClick';
import {TNavigationItem} from 'modules/navigation/model/types';
import {RatingFavoriteListItem} from 'modules/rating/components/RatingFavoriteListItem';
import React from 'react';

type TProps = {
  list: TNavigationItem<number>[];
  onChange: (value: number) => void;
  value: number;
};

export const RatingFavorite = React.memo(({list, onChange, value}: TProps) => {
  const indexMap = useIndexMap(list);
  const currentIndex = indexMap[value];

  const onNavigationButtonClick = useNextClick(list, onChange, currentIndex);

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <div className="NavigationList">
        {list.map((item) => (
          <RatingFavoriteListItem isActive={value === item.value} item={item} key={item.value} />
        ))}
      </div>
    </NavigationButton>
  );
});

RatingFavorite.displayName = 'RatingFavorite';
