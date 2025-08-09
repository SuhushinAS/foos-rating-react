import React, {useMemo} from 'react';
import './Loader.less';

type Props = {
  loading: boolean;
};

export const Loader = ({loading}: Props) => {
  const className = useMemo(() => {
    const classList = ['Loader'];

    if (!loading) {
      classList.push('Loader_Hidden');
    }

    return classList.join(' ');
  }, [loading]);

  return (
    <div className={className}>
      <div className="Loader__Inner">
        <div className="Loader__Item Loader__Item_1"></div>
        <div className="Loader__Item Loader__Item_2"></div>
        <div className="Loader__Item Loader__Item_3"></div>
      </div>
    </div>
  );
};
