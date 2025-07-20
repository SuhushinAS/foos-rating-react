import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useHistory} from 'modules/navigation/lib/useHistory';
import {useSetHistory} from 'modules/navigation/lib/useSetHistory';
import {historyList} from 'modules/navigation/model/constants';
import {THistory} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationHistory = () => {
  const history = useHistory();
  const setHistory = useSetHistory();

  return <NavigationList<THistory> list={historyList} onChange={setHistory} value={history} />;
};
