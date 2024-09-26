import 'modules/navigation/components/Navigation.less';
import {NavigationItemCity} from 'modules/navigation/components/NavigationItemCity';
import {NavigationItemEvent} from 'modules/navigation/components/NavigationItemEvent';
import {NavigationItemPlayer} from 'modules/navigation/components/NavigationItemPlayer';
import {NavigationItemRange} from 'modules/navigation/components/NavigationItemRange';
import {NavigationItemScheme} from 'modules/navigation/components/NavigationItemScheme';
import React from 'react';

export const Navigation = () => (
  <div className="Navigation">
    <NavigationItemCity />
    <NavigationItemRange />
    <NavigationItemEvent />
    <NavigationItemPlayer />
    <NavigationItemScheme />
  </div>
);
