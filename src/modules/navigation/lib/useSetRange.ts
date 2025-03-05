import {useAppDispatch} from 'app/lib/hooks';
import {navigationActions} from 'modules/navigation/model/reducers';
import {TRange} from 'modules/navigation/model/types';
import {useCallback} from 'react';

export const useSetRange = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (range: TRange) => {
      return dispatch(navigationActions.setRange(range));
    },
    [dispatch]
  );
};
