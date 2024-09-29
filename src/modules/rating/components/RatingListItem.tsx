import {TCity} from 'modules/navigation/model/types';
import {RatingChange} from 'modules/rating/components/RatingChange';
import {RatingFavorite} from 'modules/rating/components/RatingFavorite';
import {RatingRank} from 'modules/rating/components/RatingRank';
import {TRating} from 'modules/rating/model/types';
import React from 'react';
import './RatingListItem.less';

type TProps = {
  city: TCity;
  rating: TRating;
};

export const RatingListItem = ({city, rating}: TProps) => {
  return (
    <tr className="RatingListItem">
      <td className="RatingListItem__Col RatingListItem__Col_Position">{rating.position}</td>
      <td className="RatingListItem__Col RatingListItem__Col_PositionChange">
        <RatingChange change={rating.positionChange} />
      </td>
      <td className="RatingListItem__Col RatingListItem__Col_Name">{rating.name}</td>
      <td className="RatingListItem__Col RatingListItem__Col_Rank">
        <RatingRank rank={rating.rank} />
      </td>
      <td className="RatingListItem__Col RatingListItem__Col_Value">{rating.value}</td>
      <td className="RatingListItem__Col RatingListItem__Col_ValueChange">
        <RatingChange change={rating.valueChange} />
      </td>
      <td className="RatingListItem__Col RatingListItem__Col_Favorite">
        <RatingFavorite city={city} id={rating.id} />
      </td>
    </tr>
  );
};
