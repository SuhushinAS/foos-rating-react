import {TGetEntry, TGetId, TItem, TNormalize} from 'modules/common/model/types';

export const getId =
  <T = TItem>(key: keyof T): TGetId<T> =>
  (item) =>
    `${item[key]}`;

export const getEntries =
  <T = TItem>(_getId: TGetId<T>): TGetEntry<T> =>
  (item) => [_getId(item), item];

export const getNormalize =
  <T = TItem>(_getId: TGetId<T>): TNormalize<T> =>
  (list) => ({
    data: Object.fromEntries(list.map(getEntries(_getId))),
    list: list.map(_getId),
  });
