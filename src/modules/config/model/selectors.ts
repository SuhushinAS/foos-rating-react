import {TState} from 'app/model/types';
import {config} from 'modules/config/model/reducers';

export const selectConfig = (state: TState) => state[config.name];

export const selectConfigUrls = (state: TState) => selectConfig(state).urls;
