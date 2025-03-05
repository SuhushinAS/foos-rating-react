export const getDateFormat = (date: string, options?: Intl.DateTimeFormatOptions) => {
  return new Date(date).toLocaleDateString('ru-RU', options);
};
