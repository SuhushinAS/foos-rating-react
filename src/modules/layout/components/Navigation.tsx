import {NavigationItemCity} from 'modules/city/components/NavigationItemCity';
import {NavigationItemEvent} from 'modules/event/components/NavigationItemEvent';
import {NavigationItemPlayer} from 'modules/player/components/NavigationItemPlayer';
import {NavigationItemRange} from 'modules/range/components/NavigationItemRange';
import {NavigationItemScheme} from 'modules/scheme/components/NavigationItemScheme';
import React from 'react';
import './Navigation.less';

export const Navigation = () => (
  <div className="Navigation">
    <div className="Navigation__Item">
      <NavigationItemCity />
    </div>
    <div className="Navigation__Item">
      <NavigationItemRange />
    </div>
    <div className="Navigation__Item">
      <NavigationItemEvent />
    </div>
    <div className="Navigation__Item">
      <NavigationItemPlayer />
    </div>
    <div className="Navigation__Item">
      <NavigationItemScheme />
    </div>
  </div>
);
