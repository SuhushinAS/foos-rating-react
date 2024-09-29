import {useNavQuery} from 'modules/navigation/lib/useNavQuery';

export const useScheme = () => {
  return useNavQuery('scheme');
};
