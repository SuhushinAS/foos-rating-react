import {NavigationList} from 'modules/navigation/components/NavigationList';
import {useScheme} from 'modules/navigation/lib/useScheme';
import {schemeList} from 'modules/navigation/model/constants';
import {TSchemeV2} from 'modules/navigation/model/types';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

const html = document.querySelector('html');
const schemeDark = window.matchMedia('(prefers-color-scheme: dark)');

const classNames = {
  [TSchemeV2.dark]: 'html_dark',
  [TSchemeV2.light]: 'html_light',
};

const getDeviceSchemeChange = () => {
  if (schemeDark.matches) {
    return TSchemeV2.dark;
  }

  return TSchemeV2.light;
};

export const NavigationItemScheme = () => {
  const [scheme, setScheme] = useScheme();
  const [deviceScheme, setDeviceScheme] = useState(getDeviceSchemeChange);

  const onDeviceSchemeChange = useCallback(() => {
    setDeviceScheme(getDeviceSchemeChange);
  }, []);

  const schemeCurrent = useMemo(() => {
    if (scheme === TSchemeV2.auto) {
      return deviceScheme;
    }

    return scheme;
  }, [deviceScheme, scheme]);

  useEffect(() => {
    if (null !== html) {
      html.classList.remove(classNames[TSchemeV2.dark], classNames[TSchemeV2.light]);

      const className = classNames[schemeCurrent];

      if (className) {
        html.classList.add(className);
      }
    }
  }, [schemeCurrent]);

  useEffect(() => {
    schemeDark.addEventListener('change', onDeviceSchemeChange);

    return () => {
      schemeDark.removeEventListener('change', onDeviceSchemeChange);
    };
  }, [onDeviceSchemeChange]);

  return <NavigationList<TSchemeV2> list={schemeList} onChange={setScheme} value={scheme} />;
};
