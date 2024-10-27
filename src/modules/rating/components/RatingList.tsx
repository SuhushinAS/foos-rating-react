import {Scroll} from 'modules/common/components/Scroll';
import {TCity} from 'modules/navigation/model/types';
import {RatingListItem} from 'modules/rating/components/RatingListItem';
import {TRating} from 'modules/rating/model/types';
import React from 'react';
import './RatingList.less';

type TProps = {
  city: TCity;
  ratings: TRating[];
};

const dirList = ['v'] as const;

export const RatingList = ({city, ratings}: TProps) => {
  return (
    <div className="RatingList">
      <div className="RatingList__Head">
        <table className="RatingList__Table">
          <thead>
            <tr>
              <th className="RatingListItem__Col RatingListItem__Col_PositionHead">#</th>
              <th className="RatingListItem__Col RatingListItem__Col_Name">Имя</th>
              <th className="RatingListItem__Col RatingListItem__Col_Rank">Ранг</th>
              <th className="RatingListItem__Col RatingListItem__Col_ValueHead">Рейтинг</th>
              <th className="RatingListItem__Col RatingListItem__Col_Favorite"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="RatingList__Body">
        <Scroll dirList={dirList}>
          <table className="RatingList__Table">
            <tbody>
              {ratings.map((rating) => {
                return <RatingListItem city={city} key={rating.id} rating={rating} />;
              })}
            </tbody>
          </table>
        </Scroll>
      </div>
    </div>
  );
};
