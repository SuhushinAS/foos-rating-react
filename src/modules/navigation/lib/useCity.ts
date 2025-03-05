import {useAppSelector} from 'app/lib/hooks';
import {selectNavigationCity} from 'modules/navigation/model/selectors';

export const useCity = () => {
  return useAppSelector(selectNavigationCity);
};
