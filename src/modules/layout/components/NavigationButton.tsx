import React from 'react';
import './NavigationButton.less';

type TProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const NavigationButton = ({children, onClick}: TProps) => {
  return (
    <button className="NavigationButton" onClick={onClick} type="button">
      {children}
    </button>
  );
};
