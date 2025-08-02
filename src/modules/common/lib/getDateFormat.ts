import {dateFormatDefault} from 'modules/common/lib/dateFormatOptions';

export const getDateFormat = (date: string, options: Intl.DateTimeFormatOptions = dateFormatDefault) => {
  return new Date(date).toLocaleDateString('ru-RU', options);
};
