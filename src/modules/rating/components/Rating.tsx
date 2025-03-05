import {useStorageInit} from 'app/lib/useStorageInit';
import {useCity} from 'modules/navigation/lib/useCity';
import {RatingCity} from 'modules/rating/components/RatingCity';
import React from 'react';
import './Rating.less';

export const Rating = () => {
  const [city, setCity] = useCity();

  useStorageInit();

  return (
    <div className="Rating">
      <div className="Rating__Item">
        <RatingCity city={city} setCity={setCity} />
      </div>
    </div>
  );
};
