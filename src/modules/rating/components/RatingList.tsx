import {Scroll, TDirection} from 'modules/common/components/Scroll';
import {TCity, TFilter} from 'modules/navigation/model/types';
import {RatingListEmpty} from 'modules/rating/components/RatingListEmpty';
import {RatingListItem} from 'modules/rating/components/RatingListItem';
import {TRating} from 'modules/rating/model/types';
import React from 'react';
import './RatingList.less';

type TProps = {
  city: TCity;
  filter: TFilter;
  ratings: TRating[];
};

const dirList: TDirection[] = ['v'];

export const RatingList = ({city, filter, ratings}: TProps) => {
  if (0 === ratings.length) {
    return <RatingListEmpty city={city} filter={filter} />;
  }

  return (
    <div className="RatingList">
      <Scroll dirList={dirList}>
        {ratings.map((rating) => (
          <RatingListItem city={city} key={rating.id} rating={rating} />
        ))}
      </Scroll>
    </div>
  );
};
