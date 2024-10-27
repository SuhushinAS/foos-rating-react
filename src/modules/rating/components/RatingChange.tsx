import React, {useMemo} from 'react';
import './RatingChange.less';

type TProps = {
  change: number;
};

enum ChangeType {
  negative = 'negative',
  none = 'none',
  positive = 'positive',
}

export const RatingChange = ({change}: TProps) => {
  const changeType = useMemo(() => {
    if (0 === change) {
      return ChangeType.none;
    }

    if (0 < change) {
      return ChangeType.positive;
    }

    return ChangeType.negative;
  }, [change]);

  const className = useMemo(() => {
    const classList = ['RatingChange', `RatingChange_${changeType}`];

    return classList.join(' ');
  }, [changeType]);

  if (0 === change) {
    return null;
  }

  return <sub className={className}>{change}</sub>;
};
