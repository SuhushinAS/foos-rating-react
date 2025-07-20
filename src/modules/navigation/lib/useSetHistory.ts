import {useAppDispatch} from 'app/lib/hooks';
import {navigationActions} from 'modules/navigation/model/reducers';
import {THistory} from 'modules/navigation/model/types';
import {useCallback} from 'react';

export const useSetHistory = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (history: THistory) => {
      return dispatch(navigationActions.setHistory(history));
    },
    [dispatch]
  );
};
