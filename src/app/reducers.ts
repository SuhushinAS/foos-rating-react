import {config} from 'modules/config/reducers';
import {example} from 'modules/example/reducers';
import {locale} from 'modules/locale/reducers';
import {rating} from 'modules/rating/model/reducers';
import {status} from 'modules/status/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [config.name]: config.reducer,
  [example.name]: example.reducer,
  [locale.name]: locale.reducer,
  [rating.name]: rating.reducer,
  [status.name]: status.reducer,
});
