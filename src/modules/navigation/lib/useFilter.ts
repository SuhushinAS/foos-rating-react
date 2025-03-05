import {useAppSelector} from 'app/lib/hooks';
import {selectNavigationFilter} from 'modules/navigation/model/selectors';

export const useFilter = () => {
  return useAppSelector(selectNavigationFilter);
};
