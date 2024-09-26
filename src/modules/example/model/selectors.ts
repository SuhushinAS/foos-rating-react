import {createAppSelector} from 'app/lib/hooks';
import {TState} from 'app/model/types';
import {getList} from 'modules/common/lib/selectors';
import {example} from 'modules/example/model/reducers';
import {TExampleMap, TExampleStore} from 'modules/example/model/types';

export const selectExample = (state: TState): TExampleStore => {
  return state[example.name];
};

export const getExampleData = (exampleStore: TExampleStore): TExampleMap => {
  return exampleStore.data;
};

export const selectExampleData = createAppSelector(selectExample, getExampleData);

export const getExampleIdList = (exampleStore: TExampleStore): string[] => {
  return exampleStore.list;
};

export const selectExampleIdList = createAppSelector(selectExample, getExampleIdList);

export const selectExampleList = createAppSelector([selectExampleData, selectExampleIdList], getList);

export const getExampleItem = (exampleData: TExampleMap, id: string) => {
  return exampleData[id];
};
