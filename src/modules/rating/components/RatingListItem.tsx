import {TCity} from 'modules/navigation/model/types';
import {RatingChange} from 'modules/rating/components/RatingChange';
import {RatingFavorite} from 'modules/rating/components/RatingFavorite';
import {RatingRank} from 'modules/rating/components/RatingRank';
import {TRating} from 'modules/rating/model/types';
import React from 'react';

type TProps = {
  city: TCity;
  rating: TRating;
};

export const RatingListItem = ({city, rating}: TProps) => {
  return (
    <div className="RatingList__Row">
      <div className="RatingList__Col RatingList__Col_Position">{rating.position}</div>
      <div className="RatingList__Col RatingList__Col_PositionChange">
        <RatingChange change={rating.positionChange} />
      </div>
      <div className="RatingList__Col RatingList__Col_Name">{rating.name}</div>
      <div className="RatingList__Col RatingList__Col_Rank">
        <RatingRank rank={rating.rank} />
      </div>
      <div className="RatingList__Col RatingList__Col_Value">{rating.value}</div>
      <div className="RatingList__Col RatingList__Col_ValueChange">
        <RatingChange change={rating.valueChange} />
      </div>
      <div className="RatingList__Col RatingList__Col_Favorite">
        <RatingFavorite city={city} id={rating.id} />
      </div>
    </div>
  );
};
