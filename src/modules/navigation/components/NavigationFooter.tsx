import {Navigation} from 'modules/navigation/components/Navigation';
import 'modules/navigation/components/Navigation.less';
import {NavigationFilterList} from 'modules/navigation/components/NavigationFilterList';
import {NavigationItemScheme} from 'modules/navigation/components/NavigationItemScheme';
import {NavigationRange} from 'modules/navigation/components/NavigationRange';
import {useCity} from 'modules/navigation/lib/useCity';
import React from 'react';

export const NavigationFooter = () => {
  const [city] = useCity();

  return (
    <div>
      <Navigation>
        <NavigationRange city={city} />
        <NavigationFilterList city={city} />
        <NavigationItemScheme />
      </Navigation>
    </div>
  );
};
