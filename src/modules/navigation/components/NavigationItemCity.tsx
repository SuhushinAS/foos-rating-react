import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {useCity} from 'modules/navigation/lib/useCity';
import {getIndexMap} from 'modules/navigation/lib/useIndexMap';
import {cityList} from 'modules/navigation/model/constants';
import React, {useCallback} from 'react';

const indexMap = getIndexMap(cityList);

export const NavigationItemCity = () => {
  const [city, setCity] = useCity();

  const index = indexMap[city];
  const item = cityList[index];

  const onNavigationButtonClick = useCallback(() => {
    const indexNext = (index + 1) % cityList.length;
    const itemNext = cityList[indexNext];

    setCity(itemNext.value);
  }, [index, setCity]);

  return (
    <NavigationButton onClick={onNavigationButtonClick}>
      <h1>{item.title}</h1>
    </NavigationButton>
  );
};
