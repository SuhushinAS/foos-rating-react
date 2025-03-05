import {useAppSelector} from 'app/lib/hooks';
import {selectNavigationRange} from 'modules/navigation/model/selectors';

export const useRange = () => {
  return useAppSelector(selectNavigationRange);
};
