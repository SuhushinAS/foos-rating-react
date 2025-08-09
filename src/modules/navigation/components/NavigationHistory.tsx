import {useAppSelector} from 'app/lib/hooks';
import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useSetHistory} from 'modules/navigation/lib/useSetHistory';
import {historyList} from 'modules/navigation/model/constants';
import {selectNavigationHistory} from 'modules/navigation/model/selectors';
import {THistory} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationHistory = () => {
  const history = useAppSelector(selectNavigationHistory);
  const setHistory = useSetHistory();

  return <NavigationList<THistory> list={historyList} onChange={setHistory} value={history} />;
};
