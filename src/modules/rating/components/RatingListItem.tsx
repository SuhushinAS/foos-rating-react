import {TCity} from 'modules/navigation/model/types';
import {RatingChange} from 'modules/rating/components/RatingChange';
import {RatingFavoriteContainer} from 'modules/rating/components/RatingFavoriteContainer';
import {RatingRank} from 'modules/rating/components/RatingRank';
import {TRating} from 'modules/rating/model/types';
import React from 'react';

type TProps = {
  city: TCity;
  rating: TRating;
};

export const RatingListItem = React.memo(({city, rating}: TProps) => {
  return (
    <div className="RatingList__Row">
      <div className="RatingList__Col RatingList__Col_Position">{rating.position}</div>
      <div className="RatingList__Col RatingList__Col_Change">
        <RatingChange change={rating.positionChange} />
      </div>
      <div className="RatingList__Col RatingList__Col_Name">{rating.name}</div>
      <div className="RatingList__Col RatingList__Col_Rank">
        <RatingRank rank={rating.rank} />
      </div>
      <div className="RatingList__Col RatingList__Col_Value">{rating.value}</div>
      <div className="RatingList__Col RatingList__Col_Change">
        <RatingChange change={rating.valueChange} />
      </div>
      <div className="RatingList__Col RatingList__Col_Favorite">
        <RatingFavoriteContainer city={city} id={rating.id} />
      </div>
    </div>
  );
});

RatingListItem.displayName = 'RatingListItem';
