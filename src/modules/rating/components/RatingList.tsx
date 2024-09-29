import {TCity} from 'modules/navigation/model/types';
import {RatingListItem} from 'modules/rating/components/RatingListItem';
import {TRating} from 'modules/rating/model/types';
import React from 'react';
import './RatingList.less';

type TProps = {
  city: TCity;
  ratings: TRating[];
};

export const RatingList = ({city, ratings}: TProps) => {
  return (
    <table className="RatingList">
      <tbody>
        {ratings.map((rating) => {
          return <RatingListItem city={city} key={rating.id} rating={rating} />;
        })}
      </tbody>
    </table>
  );
};
