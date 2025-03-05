import {useAppDispatch} from 'app/lib/hooks';
import {navigationActions} from 'modules/navigation/model/reducers';
import {TFilter} from 'modules/navigation/model/types';
import {useCallback} from 'react';

export const useSetFilter = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (filter: TFilter) => {
      return dispatch(navigationActions.setFilter(filter));
    },
    [dispatch]
  );
};
