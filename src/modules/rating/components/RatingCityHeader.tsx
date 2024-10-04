import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {getIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useNextClick} from 'modules/navigation/lib/useNextClick';
import {cityList} from 'modules/navigation/model/constants';
import {TCity, TNavigation} from 'modules/navigation/model/types';
import React from 'react';
import './RatingCityHeader.less';

const indexMap = getIndexMap(cityList);

type TProps = {
  city: TCity;
  setCity: (value: TNavigation[TCity]) => void;
};

export const RatingCityHeader = ({city, setCity}: TProps) => {
  const index = indexMap[city];
  const item = cityList[index];

  const onNavigationButtonClick = useNextClick(cityList, setCity, index);

  return (
    <div className="RatingCityHeader">
      <NavigationButton onClick={onNavigationButtonClick}>
        <h1>{item.title}</h1>
      </NavigationButton>
    </div>
  );
};
