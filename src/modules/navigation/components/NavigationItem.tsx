import 'modules/navigation/components/NavigationItem.less';
import React from 'react';

type TProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
};

export const NavigationItem = ({icon, title}: TProps) => {
  return (
    <div className="NavigationItem">
      <div className="NavigationItem__Icon">{icon}</div>
      <div className="NavigationItem__Title">{title}</div>
    </div>
  );
};
