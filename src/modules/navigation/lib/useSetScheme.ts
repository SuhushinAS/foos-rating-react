import {useAppDispatch} from 'app/lib/hooks';
import {navigationActions} from 'modules/navigation/model/reducers';
import {TSchemeV2} from 'modules/navigation/model/types';
import {useCallback} from 'react';

export const useSetScheme = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (scheme: TSchemeV2) => {
      return dispatch(navigationActions.setScheme(scheme));
    },
    [dispatch]
  );
};
