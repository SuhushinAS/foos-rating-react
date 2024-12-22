import 'modules/navigation/components/NavigationItem.less';
import React, {useMemo} from 'react';

type TProps = {
  children: React.ReactNode;
  isActive?: boolean;
  isCurrent?: boolean;
};

export const NavigationItem = ({children, isActive = false, isCurrent = false}: TProps) => {
  const className = useMemo(() => {
    const classList = ['NavigationItem'];

    if (isActive) {
      classList.push('NavigationItem_isActive');
    }

    if (isCurrent) {
      classList.push('NavigationItem_isCurrent');
    }

    return classList.join(' ');
  }, [isActive, isCurrent]);

  return <div className={className}>{children}</div>;
};
