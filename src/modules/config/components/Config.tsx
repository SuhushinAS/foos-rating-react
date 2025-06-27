import {useConfigGet} from 'modules/config/lib/useConfigGet';
import {configActions} from 'modules/config/model/reducers';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export const Config = ({children}: Props) => {
  const load = useLoadItem(configActions.update.type);

  useConfigGet();

  if (false === load) {
    return children;
  }

  return null;
};
