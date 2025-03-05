import {useStorageInit} from 'app/lib/useStorageInit';
import {useCity} from 'modules/navigation/lib/useCity';
import {useSetCity} from 'modules/navigation/lib/useSetCity';
import {RatingCity} from 'modules/rating/components/RatingCity';
import React from 'react';
import './Rating.less';

export const Rating = () => {
  const city = useCity();
  const setCity = useSetCity();

  useStorageInit();

  return (
    <div className="Rating">
      <div className="Rating__Item">
        <RatingCity city={city} setCity={setCity} />
      </div>
    </div>
  );
};
