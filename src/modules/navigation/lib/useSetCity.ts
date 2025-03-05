import {useAppDispatch} from 'app/lib/hooks';
import {navigationActions} from 'modules/navigation/model/reducers';
import {TCity} from 'modules/navigation/model/types';
import {useCallback} from 'react';

export const useSetCity = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (city: TCity) => {
      return dispatch(navigationActions.setCity(city));
    },
    [dispatch]
  );
};
