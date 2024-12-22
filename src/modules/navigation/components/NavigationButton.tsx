import 'modules/navigation/components/NavigationButton.less';
import React from 'react';

type TProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

export const NavigationButton = ({children, disabled, onClick}: TProps) => {
  return (
    <button className="NavigationButton" disabled={disabled} onClick={onClick} type="button">
      {children}
    </button>
  );
};
