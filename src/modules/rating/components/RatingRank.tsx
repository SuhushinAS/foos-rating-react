import React, {useMemo} from 'react';
import './RatingRank.less';

type TProps = {
  rank: string;
};

export const RatingRank = ({rank}: TProps) => {
  const className = useMemo(() => {
    const classList = ['RatingRank', `RatingRank_${rank}`];

    return classList.join(' ');
  }, [rank]);

  return <div className={className}>{rank}</div>;
};
