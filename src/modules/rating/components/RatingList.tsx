import {useAppSelector} from 'app/lib/hooks';
import {Scroll, TDirection} from 'modules/common/components/Scroll';
import {selectNavigationHistory} from 'modules/navigation/model/selectors';
import {TCity, THistory} from 'modules/navigation/model/types';
import {RatingListItem} from 'modules/rating/components/RatingListItem';
import {getPositionMap} from 'modules/rating/lib/getPositionMap';
import {TRating} from 'modules/rating/model/types';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import './RatingList.less';

type TProps = {
  city: TCity;
  isUpdating: boolean;
  ratings: TRating[];
};

const dirList: TDirection[] = ['v'];

export const RatingList = ({city, isUpdating, ratings}: TProps) => {
  const history = useAppSelector(selectNavigationHistory);
  const [historyPrev, setHistoryPrev] = useState<THistory>(history);
  const isCurrent = isUpdating ? false : history === THistory.current;
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const positionMap = useMemo(() => {
    return getPositionMap(ratings);
  }, [ratings]);

  useEffect(() => {
    if (isUpdating) {
      setHistoryPrev(THistory.previous);
    }
  }, [isUpdating]);

  useEffect(() => {
    if (history !== historyPrev) {
      clearTimeout(timerRef.current);

      const timeout = isCurrent ? 900 : 300;

      timerRef.current = setTimeout(() => {
        setHistoryPrev(history);
      }, timeout);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [history, historyPrev, isCurrent]);

  return (
    <div className="RatingList">
      <Scroll dirList={dirList}>
        {ratings.map((rating, index) => (
          <RatingListItem
            city={city}
            isCurrent={isCurrent}
            isTranslating={history !== historyPrev && !isUpdating}
            key={index}
            positionMap={positionMap}
            rating={rating}
          />
        ))}
      </Scroll>
    </div>
  );
};
