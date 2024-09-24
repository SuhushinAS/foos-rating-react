import {useAppDispatch, useAppSelector} from 'app/hooks';
import {NavigationItemList} from 'modules/layout/components/NavigationItemList';
import {ratingActions} from 'modules/rating/model/reducers';
import {selectRatingScheme} from 'modules/rating/model/selectors';
import {schemeList} from 'modules/scheme/model/constants';
import React, {useCallback} from 'react';

export const NavigationItemScheme = () => {
  const scheme = useAppSelector(selectRatingScheme);
  const dispatch = useAppDispatch();

  const onNavigationItemClick = useCallback(
    (value) => {
      dispatch(ratingActions.setScheme(value));
    },
    [dispatch]
  );

  return <NavigationItemList list={schemeList} onClick={onNavigationItemClick} value={scheme} />;
};
