import {getDateFormat} from 'modules/common/lib/getDateFormat';
import {useMemo} from 'react';

export const useDateFormat = (date: string | undefined, options?: Intl.DateTimeFormatOptions): string | undefined => {
  return useMemo(() => {
    if (date === undefined) {
      return undefined;
    }

    return getDateFormat(date, options);
  }, [date, options]);
};
