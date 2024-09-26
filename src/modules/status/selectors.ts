import {TState} from 'app/model/types';
import {status} from 'modules/status/reducers';
import {TLoadMap, TStatusStore} from 'modules/status/types';

export const selectStatus = (state: TState): TStatusStore => state[status.name];

export const selectLoad = (state: TState): TLoadMap => selectStatus(state).load;

export const selectLoadItem = (id: string) => {
  return (state: TState): boolean | undefined => {
    return selectLoad(state)[id];
  };
};
