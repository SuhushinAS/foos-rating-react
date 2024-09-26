import {api} from 'modules/common/lib/api';
import {TAction} from 'modules/common/model/types';
import {exampleActions} from 'modules/example/model/reducers';
import {TExample} from 'modules/example/model/types';
import {statusActions} from 'modules/status/reducers';

export const actionExampleGetList: TAction<TExample[]> = (dispatch) => {
  dispatch(statusActions.loadStart(exampleActions.getList.type));

  return api
    .requestLocal<TExample[]>('/api/v1/example.json')
    .then((data) => {
      dispatch(exampleActions.getList(data));

      return data;
    })
    .finally(() => {
      dispatch(statusActions.loadStop(exampleActions.getList.type));
    });
};
