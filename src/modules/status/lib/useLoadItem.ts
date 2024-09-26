import {useAppSelector} from 'app/lib/hooks';
import {selectLoad} from 'modules/status/model/selectors';

export const useLoadItem = (id: string) => {
  const load = useAppSelector(selectLoad);

  return load[id];
};
