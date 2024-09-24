import {TDispatch, TState} from 'app/types';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
