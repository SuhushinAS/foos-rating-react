import {NavigationFilter} from 'modules/navigation/components/NavigationFilter';
import {NavigationHistory} from 'modules/navigation/components/NavigationHistory';
import {NavigationItemScheme} from 'modules/navigation/components/NavigationItemScheme';
import {NavigationRange} from 'modules/navigation/components/NavigationRange';
import React from 'react';

export const NavigationFooter = () => {
  return (
    <div className="NavigationFooter">
      <NavigationRange />
      <NavigationFilter />
      <NavigationItemScheme />
      <NavigationHistory />
    </div>
  );
};
