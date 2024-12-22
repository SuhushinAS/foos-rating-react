import {TNavigationItem} from 'modules/navigation/model/types';
import {useCallback, useRef} from 'react';

export const useNextClick = <T extends string | number>(
  list: TNavigationItem<T>[],
  onChange: (value: T) => void,
  index: number
) => {
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(() => {
    if (null !== timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      const indexNext = (index + 1) % list.length;
      const itemNext = list[indexNext];

      onChange(itemNext.value);
    });
  }, [index, list, onChange]);
};
