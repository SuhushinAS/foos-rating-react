import {TItem, TMap} from 'modules/common/model/types';

type TGetList = <T = TItem>(data: TMap<T>, list: string[]) => T[];

export const getList: TGetList = (data, list) => list.map((id) => data[id]);

export const compare = (value1: unknown, value2: unknown, path: string[] = []): any => {
  if (value1 === value2 || null === value1 || null === value2) {
    return {};
  }

  if (Array.isArray(value1) && Array.isArray(value2)) {
    const length = Math.max(value1.length, value2.length);

    return new Array(length).fill(null).reduce(
      (acc, _, key) => {
        return {
          ...acc,
          ...compare(value1[key], value2[key], [...path, `[${key}]`]),
        };
      },
      {
        [path.join('.')]: {
          value1,
          value2,
        },
      }
    );
  }

  if ('object' === typeof value1 && 'object' === typeof value2) {
    const keys = [...new Set([...Object.keys(value1), ...Object.keys(value2)])];

    return keys.reduce(
      (acc, key) => {
        return {
          ...acc,
          ...compare(value1[key], value2[key], [...path, `${key}`]),
        };
      },
      {
        [path.join('.')]: {
          value1,
          value2,
        },
      }
    );
  }

  return {
    [path.join('.')]: {
      value1,
      value2,
    },
  };
};
