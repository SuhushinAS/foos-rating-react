import {useAppSelector} from 'app/lib/hooks';
import {selectNavigation} from 'modules/navigation/model/selectors';
import {storageKeyV3} from 'modules/rating/model/constants';
import {selectRatingStore} from 'modules/rating/model/selectors';
import {useEffect} from 'react';

export const useStorageUpdate = () => {
  const navigation = useAppSelector(selectNavigation);
  const rating = useAppSelector(selectRatingStore);

  useEffect(() => {
    localStorage.setItem(storageKeyV3, JSON.stringify({navigation, rating}));
  }, [navigation, rating]);
};
