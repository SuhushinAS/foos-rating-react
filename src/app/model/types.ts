import {store} from 'app/model/store';

export type TGetState = typeof store.getState;
export type TState = ReturnType<TGetState>;
export type TDispatch = typeof store.dispatch;
