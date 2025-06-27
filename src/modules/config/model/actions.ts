import type {TDispatch} from 'app/model/types';
import {api} from 'modules/common/lib/api';
import {configActions} from 'modules/config/model/reducers';
import {TConfig} from 'modules/config/model/types';
import {statusActions} from 'modules/status/model/reducers';

const configFileMap = {
  development: 'config.dev.json',
  production: 'config.json',
};

const env = process.env.NODE_ENV ?? 'development';

const configFile = configFileMap[env] ?? configFileMap.development;

export const actionConfigGet = (dispatch: TDispatch) => {
  dispatch(statusActions.loadStart(configActions.update.type));

  api
    .requestLocal<TConfig>(`/api/v1/${configFile}`)
    .then((data) => {
      dispatch(configActions.update(data));
    })
    .finally(() => {
      dispatch(statusActions.loadStop(configActions.update.type));
    });
};
