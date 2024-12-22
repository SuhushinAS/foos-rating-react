import 'modules/navigation/components/NavigationItemInner.less';
import React from 'react';

type TProps = {
  description: React.ReactNode;
  icon: React.ReactNode;
  title: React.ReactNode;
};

export const NavigationItemInner = ({description, icon, title}: TProps) => {
  return (
    <>
      <div className="NavigationItemInner__Icon">{icon}</div>
      <div className="NavigationItemInner__Title">{title}</div>
      <div className="NavigationItemInner__Description">{description}</div>
    </>
  );
};
