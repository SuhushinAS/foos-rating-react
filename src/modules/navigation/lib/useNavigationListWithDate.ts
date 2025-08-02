import {dateFormatShort} from 'modules/common/lib/dateFormatOptions';
import {getDateFormat} from 'modules/common/lib/getDateFormat';
import {TNavigationItem} from 'modules/navigation/model/types';
import {useMemo} from 'react';

export const useNavigationWithDate = <T extends string | number>(
  item: TNavigationItem<T>,
  date?: string,
  dateFormat = dateFormatShort
) => {
  return useMemo(() => {
    if (date === undefined) {
      return item;
    }

    return {...item, title: `${item.title} ${getDateFormat(date, dateFormat)}`};
  }, [date, dateFormat, item]);
};
