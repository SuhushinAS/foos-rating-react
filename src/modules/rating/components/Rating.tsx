import {useRatingStorage} from 'modules/rating/model/useRatingStorage';
import React from 'react';

export const Rating = () => {
  useRatingStorage();

  return (
    <div>
      <div>Rating</div>
    </div>
  );
};
