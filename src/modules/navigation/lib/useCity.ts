import {useNavQuery} from 'modules/navigation/lib/useNavQuery';

export const useCity = () => {
  return useNavQuery('city');
};
