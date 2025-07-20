import {useAppSelector} from 'app/lib/hooks';
import {selectNavigationHistory} from 'modules/navigation/model/selectors';

export const useHistory = () => {
  return useAppSelector(selectNavigationHistory);
};
