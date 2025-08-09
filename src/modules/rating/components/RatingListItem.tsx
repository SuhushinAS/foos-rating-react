import {TCity, THistory} from 'modules/navigation/model/types';
import {RatingChange} from 'modules/rating/components/RatingChange';
import {RatingFavoriteContainer} from 'modules/rating/components/RatingFavoriteContainer';
import {RatingRank} from 'modules/rating/components/RatingRank';
import {TPositionMap} from 'modules/rating/lib/getPositionMap';
import {TRating} from 'modules/rating/model/types';
import React, {CSSProperties, useMemo} from 'react';

type TProps = {
  city: TCity;
  history: THistory;
  isCurrent: boolean;
  isTranslating: boolean;
  positionMap: TPositionMap;
  rating: TRating;
};

export const RatingListItem = React.memo(({city, isCurrent, isTranslating, positionMap, rating}: TProps) => {
  const {position, positionChange} = positionMap[rating.id];
  const style = useMemo<CSSProperties | undefined>(() => {
    if (isCurrent) {
      return undefined;
    }

    if (0 === positionChange) {
      return undefined;
    }

    return {
      transform: `translateY(${100 * positionChange}%)`,
    };
  }, [isCurrent, positionChange]);

  const className = useMemo(() => {
    const className = isCurrent ? 'RatingList__Row_current' : 'RatingList__Row_previous';
    const classList = ['RatingList__Row', className];

    if (isTranslating) {
      classList.push('RatingList__Row_translating');
    }

    const pos = isCurrent ? position : position + positionChange;

    if (0 === pos % 2) {
      classList.push('RatingList__Row_even');
    }

    return classList.join(' ');
  }, [isCurrent, isTranslating, position, positionChange]);

  return (
    <div className={className} style={style}>
      <div className="RatingList__Col RatingList__Col_Position">{rating.position}</div>
      <div className="RatingList__Col RatingList__Col_Change">
        <RatingChange change={rating.positionChange} />
      </div>
      <div className="RatingList__Col RatingList__Col_Name">{rating.name}</div>
      <div className="RatingList__Col RatingList__Col_Rank">
        <RatingRank rank={rating.rank} />
      </div>
      <div className="RatingList__Col RatingList__Col_Value">{rating.value}</div>
      <div className="RatingList__Col RatingList__Col_Change">
        <RatingChange change={rating.valueChange} />
      </div>
      <div className="RatingList__Col RatingList__Col_Favorite">
        <RatingFavoriteContainer city={city} id={rating.id} />
      </div>
    </div>
  );
});

RatingListItem.displayName = 'RatingListItem';
