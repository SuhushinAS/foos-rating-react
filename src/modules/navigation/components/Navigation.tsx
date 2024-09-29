import 'modules/navigation/components/Navigation.less';
import React from 'react';

type TProps = {
  children: React.ReactNode;
};

export const Navigation = ({children}: TProps) => {
  return <div className="Navigation">{children}</div>;
};
