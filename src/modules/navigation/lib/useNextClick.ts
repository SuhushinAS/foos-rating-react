import {TNavigation, TNavigationItem} from 'modules/navigation/model/types';
import {useCallback} from 'react';

export const useNextClick = <T>(list: TNavigationItem<T>[], onChange: (value: TNavigation[T]) => void, index: number) => {
  return useCallback(() => {
    const indexNext = (index + 1) % list.length;
    const itemNext = list[indexNext];

    onChange(itemNext.value);
  }, [index, list, onChange]);
};
