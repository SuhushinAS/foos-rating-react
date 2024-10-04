import 'modules/navigation/components/NavigationItem.less';
import React, {useMemo} from 'react';

type TProps = {
  children: React.ReactNode;
  isActive?: boolean;
};

export const NavigationItem = ({children, isActive = false}: TProps) => {
  const className = useMemo(() => {
    const classList = ['NavigationItem'];

    if (isActive) {
      classList.push('NavigationItem_isActive');
    }

    return classList.join(' ');
  }, [isActive]);

  return <div className={className}>{children}</div>;
};
