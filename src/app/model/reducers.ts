import {example} from 'modules/example/model/reducers';
import {navigation} from 'modules/navigation/model/reducers';
import {rating} from 'modules/rating/model/reducers';
import {status} from 'modules/status/model/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [example.name]: example.reducer,
  [navigation.name]: navigation.reducer,
  [rating.name]: rating.reducer,
  [status.name]: status.reducer,
});
