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
        <div className="RatingList__Table">
          <div className="RatingList__Row">
            <div className="RatingList__Col RatingList__Col_PositionHead">#</div>
            <div className="RatingList__Col RatingList__Col_Name">Имя</div>
            <div className="RatingList__Col RatingList__Col_Rank">Ранг</div>
            <div className="RatingList__Col RatingList__Col_ValueHead">Рейтинг</div>
            <div className="RatingList__Col RatingList__Col_Favorite"></div>
          </div>
        </div>
      </div>
      <div className="RatingList__Body">
        <Scroll dirList={dirList}>
          <div className="RatingList__Table">
            {ratings.map((rating) => {
              return <RatingListItem city={city} key={rating.id} rating={rating} />;
            })}
          </div>
        </Scroll>
      </div>
    </div>
  );
};
