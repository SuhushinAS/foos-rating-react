import {TDispatch, TGetState} from 'app/types';
import {dispatchData} from 'modules/common/helpers/action';
import {api} from 'modules/common/helpers/api';
import {TAction, TActionData} from 'modules/common/types';
import {currentLocaleKey, defaultLocale} from 'modules/locale/constants';
import {localeActions} from 'modules/locale/reducers';
import {selectLocaleCurrent} from 'modules/locale/selectors';
import {TLocale} from 'modules/locale/types';
import {loadStop} from 'modules/status/actions';
import {statusActions} from 'modules/status/reducers';
import {Action} from 'redux';

type TLocaleList = {list: string[]};

export const actionLocaleGetList: TAction<TLocaleList> = (dispatch) => {
  dispatch(statusActions.loadStart(localeActions.getList.type));

  return api
    .requestLocal<TLocaleList>('/api/v1/locale.json')
    .then(dispatchData(dispatch, localeActions.getList))
    .then(loadStop(dispatch, localeActions.getList.type));
};

type TLocaleSetCurrent = (currentLocale: string) => (dispatch: TDispatch) => Action<string>;

export const actionLocaleSetCurrent: TLocaleSetCurrent = (currentLocale) => (dispatch) => {
  localStorage.setItem(currentLocaleKey, currentLocale);

  return dispatch(localeActions.setCurrent(currentLocale));
};

type TLocaleInit = (dispatch: TDispatch, getState: TGetState) => (dispatch: TDispatch) => Action<string>;

export const actionLocaleInit: TLocaleInit = (dispatch: TDispatch, getState: TGetState) => {
  const state = getState();
  const currentLocale = selectLocaleCurrent(state) || localStorage.getItem(currentLocaleKey) || defaultLocale;

  return dispatch(actionLocaleSetCurrent(currentLocale));
};

type TMessages = {
  data: TLocale[];
};

export const actionLocaleGetMessages: TActionData<TMessages, string> = (language) => (dispatch) => {
  dispatch(statusActions.loadStart(localeActions.getMessages.type));

  return api
    .requestLocal<TMessages>(`/api/v1/locale-${language}.json`)
    .then((data) => {
      dispatchData(dispatch, localeActions.getMessages)({data, language});

      return data;
    })
    .then(loadStop(dispatch, localeActions.getMessages.type));
};
