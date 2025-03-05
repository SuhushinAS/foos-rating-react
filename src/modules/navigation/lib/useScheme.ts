import {useAppSelector} from 'app/lib/hooks';
import {selectNavigationScheme} from 'modules/navigation/model/selectors';

export const useScheme = () => {
  return useAppSelector(selectNavigationScheme);
};
