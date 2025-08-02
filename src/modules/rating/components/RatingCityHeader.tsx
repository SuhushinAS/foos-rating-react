import {useAppSelector} from 'app/lib/hooks';
import {dateFormatHeader} from 'modules/common/lib/dateFormatOptions';
import {getDateFormat} from 'modules/common/lib/getDateFormat';
import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {getIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useNextClick} from 'modules/navigation/lib/useNextClick';
import {cityList} from 'modules/navigation/model/constants';
import {TCity} from 'modules/navigation/model/types';
import {selectLastEvent} from 'modules/rating/model/selectors';
import React, {useMemo} from 'react';
import './RatingCityHeader.less';

const indexMap = getIndexMap(cityList);

type TProps = {
  city: TCity;
  setCity: (value: TCity) => void;
};

export const RatingCityHeader = ({city, setCity}: TProps) => {
  const index = indexMap[city];
  const item = cityList[index];
  const lastEvent = useAppSelector(selectLastEvent(city));

  const rows = useMemo(() => {
    const result: string[] = [];

    if (lastEvent) {
      const lastEventDate = getDateFormat(lastEvent.date, dateFormatHeader);
      const lastEventName = lastEvent.name
        .replace(/\s+/giu, ' ')
        .replace(/^(\s*[-_:,]\s*)*\d{1,2}\.\d{1,2}(\.\d{2,4})?(\s*[-_:,]\s*)*/giu, '')
        .replace(/(\s*[-_:,]\s*)*\d{1,2}\.\d{1,2}(\.\d{2,4})?(\s*[-_:,]\s*)*$/giu, '');

      result.push(lastEventName);
      result.push(lastEventDate);
    }

    return result;
  }, [lastEvent]);

  const onNavigationButtonClick = useNextClick(cityList, setCity, index);

  return (
    <div className="RatingCityHeader">
      <div className="RatingCityHeader__Head">
        <NavigationButton onClick={onNavigationButtonClick}>
          <h1 className="RatingCityHeader__Title">{item.title}</h1>
        </NavigationButton>
      </div>
      <h6 className="RatingCityHeader__Info">
        {rows.map((row, index) => {
          return (
            <div className="RatingCityHeader__Row" key={index}>
              {row}
            </div>
          );
        })}
      </h6>
    </div>
  );
};
