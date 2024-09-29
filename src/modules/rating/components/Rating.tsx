import {useStorageInit} from 'app/lib/useStorageInit';
import {useCity} from 'modules/navigation/lib/useCity';
import {RatingCity} from 'modules/rating/components/RatingCity';
import React from 'react';

export const Rating = () => {
  const [city] = useCity();

  useStorageInit();

  return <RatingCity city={city} />;
};
