import {SvgIcon} from 'modules/common/components/SvgIcon';
import {TCity, TFilter} from 'modules/navigation/model/types';
import {useFavorite} from 'modules/rating/lib/useFavorite';
import React from 'react';
import './RatingListEmpty.less';

type TProps = {
  city: TCity;
  filter: TFilter;
};

export const RatingListEmpty = ({city, filter}: TProps) => {
  const favorite = useFavorite(city);

  if (filter === TFilter.favorite) {
    if (favorite === undefined) {
      return (
        <h4 className="RatingListEmpty">
          Отметь игроков <SvgIcon name="star" />, чтобы следить за&nbsp;их&nbsp;результатами
        </h4>
      );
    }
  }

  return (
    <h4 className="RatingListEmpty">
      Нет данных о&nbsp;рейтинге, <span className="RatingListEmpty__NoWrap">х.з. почему...(</span>
    </h4>
  );
};
