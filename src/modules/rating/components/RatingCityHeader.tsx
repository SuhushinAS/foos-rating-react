import {Scroll, TDirection} from 'modules/common/components/Scroll';
import {getDateFormat} from 'modules/common/lib/getDateFormat';
import {useDateFormat} from 'modules/common/lib/useDateFormat';
import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {getIndexMap} from 'modules/navigation/lib/useIndexMap';
import {useNextClick} from 'modules/navigation/lib/useNextClick';
import {cityList} from 'modules/navigation/model/constants';
import {TCity} from 'modules/navigation/model/types';
import {useLastEvent} from 'modules/rating/lib/useLastEvent';
import {useSeasonStartDate} from 'modules/rating/lib/useSeasonStartDate';
import {TLastEvent} from 'modules/rating/model/types';
import React, {useMemo} from 'react';
import './RatingCityHeader.less';

const indexMap = getIndexMap(cityList);

type TProps = {
  city: TCity;
  setCity: (value: TCity) => void;
};

const dirList: TDirection[] = ['h'];
const dateFormatOptions: Intl.DateTimeFormatOptions = {dateStyle: 'long'};

export const RatingCityHeader = ({city, setCity}: TProps) => {
  const index = indexMap[city];
  const item = cityList[index];
  const seasonStartDate = useSeasonStartDate(city);
  const lastEvent = useLastEvent(city);
  const seasonStartDateFormat = useDateFormat(seasonStartDate, dateFormatOptions);

  const lastEventFormat = useMemo<TLastEvent | undefined>(() => {
    if (lastEvent === undefined) {
      return undefined;
    }

    return {
      date: getDateFormat(lastEvent.date, dateFormatOptions),
      name: lastEvent.name.replace(/\s+/giu, ' ').replace(/^\s*\d{1,2}\.\d{1,2}(\.\d{2,4})?(\s*[-_:]\s*)?/giu, ''),
    };
  }, [lastEvent]);

  const onNavigationButtonClick = useNextClick(cityList, setCity, index);

  return (
    <div className="RatingCityHeader">
      <div className="RatingCityHeader__Head">
        <NavigationButton onClick={onNavigationButtonClick}>
          <h1 className="RatingCityHeader__Title">{item.title}</h1>
        </NavigationButton>
      </div>
      <div className="RatingCityHeader__Info">
        <div className="RatingCityHeader__InfoScroll">
          <Scroll dirList={dirList}>
            <div className="RatingCityHeader__InfoInner">
              {seasonStartDateFormat && (
                <div className="RatingCityHeader__Season">Начало сезона: {seasonStartDateFormat}</div>
              )}
              {lastEventFormat && <div className="RatingCityHeader__LastEvent">{lastEventFormat.name}</div>}
              {lastEventFormat && <div className="RatingCityHeader__LastEvent">{lastEventFormat.date}</div>}
            </div>
          </Scroll>
        </div>
      </div>
    </div>
  );
};
