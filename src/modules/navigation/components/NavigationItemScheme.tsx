import {NavigationItemList} from 'modules/navigation/components/NavigationItemList';
import {useScheme} from 'modules/navigation/lib/useScheme';
import {schemeList} from 'modules/navigation/model/constants';
import {TSchemeV2} from 'modules/navigation/model/types';
import React from 'react';

export const NavigationItemScheme = () => {
  const [scheme, setScheme] = useScheme();

  return <NavigationItemList<TSchemeV2> list={schemeList} onChange={setScheme} value={scheme} />;
};
