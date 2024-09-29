import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TCity} from 'modules/navigation/model/types';
import {useFavoriteItem} from 'modules/rating/lib/useFavoriteItem';
import {useSetFavoriteItem} from 'modules/rating/lib/useSetFavorite';
import React, {useMemo} from 'react';
import './RatingFavorite.less';

type TProps = {
  city: TCity;
  id: number;
};

export const RatingFavorite = ({city, id}: TProps) => {
  const isFavorite = useFavoriteItem(city, id);
  const className = useMemo(() => {
    const classList = ['RatingFavorite'];

    return classList.join(' ');
  }, []);

  const setFavoriteItem = useSetFavoriteItem(city, id, !isFavorite);

  return (
    <button className={className} onClick={setFavoriteItem} type="button">
      {isFavorite ? <SvgIcon name="star" /> : <SvgIcon name="star-o" />}
    </button>
  );
};
