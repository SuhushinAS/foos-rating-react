import {TState} from 'app/model/types';
import {status} from 'modules/status/model/reducers';
import {TLoadMap, TStatusStore} from 'modules/status/model/types';

export const selectStatus = (state: TState): TStatusStore => {
  return state[status.name] as TStatusStore;
};

export const selectLoad = (state: TState): TLoadMap => {
  return selectStatus(state).load;
};
