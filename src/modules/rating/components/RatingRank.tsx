import React, {useMemo} from 'react';
import './RatingRank.less';

type TProps = {
  rank: string;
};

export const RatingRank = ({rank}: TProps) => {
  const value = useMemo(() => {
    return rank.charAt(0);
  }, [rank]);

  const className = useMemo(() => {
    const classList = ['RatingRank', `RatingRank_${rank}`];

    return classList.join(' ');
  }, [rank]);

  return <div className={className}>{value}</div>;
};
