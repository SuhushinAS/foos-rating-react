import {defaultValues} from 'modules/navigation/model/constants';
import {TNavigation} from 'modules/navigation/model/types';
import {useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

export const useNavQuery = <T extends keyof TNavigation>(
  name: T
): [TNavigation[T], (value: TNavigation[T]) => void] => {
  const [searchParams, setSearchParams] = useSearchParams(defaultValues);
  const navQuery = useMemo(() => {
    return searchParams.get(name) as TNavigation[T];
  }, [name, searchParams]);
  console.log({action: 'useNavQuery', name, value: navQuery});

  const setNavQuery = useCallback(
    (value: TNavigation[T]) => {
      setSearchParams((searchParams) => {
        searchParams.set(name, value);

        return searchParams;
      });
    },
    [name, setSearchParams]
  );

  return [navQuery, setNavQuery];
};
