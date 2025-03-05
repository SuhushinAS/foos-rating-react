import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TCity, TNavigationItem} from 'modules/navigation/model/types';
import {RatingFavorite} from 'modules/rating/components/RatingFavorite';
import {useIsFavorite} from 'modules/rating/lib/useIsFavorite';
import React from 'react';

type TProps = {
  city: TCity;
  id: number;
};

const favoriteList: TNavigationItem<number>[] = [
  {
    icon: <SvgIcon name="star-o" />,
    title: '',
    value: 0,
  },
  {
    icon: <SvgIcon name="star" />,
    title: '',
    value: 1,
  },
];

export const RatingFavoriteContainer = ({city, id}: TProps) => {
  const [isFavorite, setIsFavorite] = useIsFavorite(city, id);

  return <RatingFavorite list={favoriteList} onChange={setIsFavorite} value={isFavorite} />;
};
