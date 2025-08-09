import {TItem, TMap} from 'modules/common/model/types';

type TGetList = <T = TItem>(data: TMap<T>, list: string[]) => T[];

export const getList: TGetList = (data, list) => list.map((id) => data[id]);
