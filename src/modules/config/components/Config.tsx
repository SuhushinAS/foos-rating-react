import {useAppDispatch, useAppSelector} from 'app/hooks';
import {Api} from 'modules/common/helpers/api';
import {actionConfigGet} from 'modules/config/actions';
import {configActions} from 'modules/config/reducers';
import {selectLoadItem} from 'modules/status/selectors';
import React, {useEffect} from 'react';

type TProps = {
  children: React.ReactNode;
};

export const Config = ({children}: TProps) => {
  const dispatch = useAppDispatch();
  const loadConfig = useAppSelector(selectLoadItem(configActions.update.type));

  useEffect(() => {
    dispatch(actionConfigGet).then((config) => {
      Api.host = config.host;
    });
  }, [dispatch]);

  if (undefined === loadConfig) {
    return null;
  }

  if (loadConfig) {
    return <div>Loading...</div>;
  }

  return children;
};
