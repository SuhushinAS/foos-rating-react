import {useAppSelector} from 'app/lib/hooks';
import {useStorageUpdate} from 'app/lib/useStorageUpdate';
import {useSetCity} from 'modules/navigation/lib/useSetCity';
import {selectNavigationCity} from 'modules/navigation/model/selectors';
import {RatingCity} from 'modules/rating/components/RatingCity';
import React from 'react';
import './Rating.less';

export const Rating = () => {
  const city = useAppSelector(selectNavigationCity);
  const setCity = useSetCity();

  useStorageUpdate();

  return (
    <div className="Rating">
      <div className="Rating__Item">
        <RatingCity city={city} setCity={setCity} />
      </div>
    </div>
  );
};
