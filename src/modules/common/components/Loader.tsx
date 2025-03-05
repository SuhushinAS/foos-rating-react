import React, {ReactNode, useMemo} from 'react';
import './Loader.less';

type Props = {
  children: ReactNode;
  loading: boolean;
};

export const Loader = ({children, loading}: Props) => {
  const className = useMemo(() => {
    const classList = ['Loader'];

    if (!loading) {
      classList.push('Loader_Hidden');
    }

    return classList.join(' ');
  }, [loading]);
  return (
    <>
      {children}
      <div className={className}>
        <div className="Loader__Inner">
          <div className="Loader__Item Loader__Item_1"></div>
          <div className="Loader__Item Loader__Item_2"></div>
          <div className="Loader__Item Loader__Item_3"></div>
        </div>
      </div>
    </>
  );
};
