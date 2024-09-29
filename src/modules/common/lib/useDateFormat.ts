import {useMemo} from 'react';

export const useDateFormat = (date: string | undefined) => {
  return useMemo<string>(() => {
    if (date === undefined) {
      return '\u00A0';
    }

    return new Date(date).toLocaleDateString('ru-RU');
  }, [date]);
};
