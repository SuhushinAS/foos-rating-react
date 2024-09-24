import {useAppDispatch, useAppSelector} from 'app/hooks';
import {actionRatingInit} from 'modules/rating/model/actions';
import {storageKeyV2} from 'modules/rating/model/constants';
import {selectRating} from 'modules/rating/model/selectors';
import {useEffect, useState} from 'react';

export const useRatingStorage = () => {
  const rating = useAppSelector(selectRating);
  const dispatch = useAppDispatch();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    dispatch(actionRatingInit);
    setIsInit(true);
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      localStorage.setItem(storageKeyV2, JSON.stringify(rating));
    }
  }, [isInit, rating]);
};
