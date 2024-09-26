import 'modules/navigation/components/NavigationItem.less';
import React from 'react';

type TProps = {
  description: React.ReactNode;
  icon: React.ReactNode;
  title: React.ReactNode;
};

export const NavigationItem = ({description, icon, title}: TProps) => {
  return (
    <div className="NavigationItem">
      <div className="NavigationItem__Icon">{icon}</div>
      <div className="NavigationItem__Title">{title}</div>
      <div className="NavigationItem__Description">{description}</div>
    </div>
  );
};
