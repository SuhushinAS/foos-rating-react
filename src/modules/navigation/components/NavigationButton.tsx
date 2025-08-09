import 'modules/navigation/components/NavigationButton.less';
import React from 'react';

type TProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  onPointerDown?: () => void;
  onPointerUp?: () => void;
};

export const NavigationButton = ({children, disabled, onClick, onPointerDown, onPointerUp}: TProps) => {
  return (
    <button
      className="NavigationButton"
      disabled={disabled}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      type="button"
    >
      {children}
    </button>
  );
};
