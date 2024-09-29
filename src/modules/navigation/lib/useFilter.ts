import {useNavQuery} from 'modules/navigation/lib/useNavQuery';

export const useFilter = () => {
  return useNavQuery('filter');
};
