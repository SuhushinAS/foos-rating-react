import {useAppSelector} from 'app/lib/hooks';
import {useStorageInit} from 'app/lib/useStorageInit';
import {selectCity} from 'modules/navigation/model/selectors';
import {RatingCity} from 'modules/rating/components/RatingCity';
import React from 'react';

export const Rating = () => {
  const city = useAppSelector(selectCity);

  useStorageInit();

  return <RatingCity city={city} />;
};
