import 'modules/navigation/components/NavigationItemInner.less';
import React from 'react';

type TProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
};

export const NavigationItemInner = ({icon, title}: TProps) => {
  return (
    <>
      <div className="NavigationItemInner__Icon">{icon}</div>
      <div className="NavigationItemInner__Title">{title}</div>
    </>
  );
};
