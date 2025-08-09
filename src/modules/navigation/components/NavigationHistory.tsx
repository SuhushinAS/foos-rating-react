import {SvgIcon} from 'modules/common/components/SvgIcon';
import {NavigationButton} from 'modules/navigation/components/NavigationButton';
import {NavigationItemInner} from 'modules/navigation/components/NavigationItemInner';
import {useSetHistory} from 'modules/navigation/lib/useSetHistory';
import {THistory} from 'modules/navigation/model/types';
import React, {useCallback} from 'react';

export const NavigationHistory = () => {
  const setHistory = useSetHistory();

  const onPointerUp = useCallback(() => {
    setHistory(THistory.current);
  }, [setHistory]);

  const onPointerDown = useCallback(() => {
    setHistory(THistory.previous);
  }, [setHistory]);

  return (
    <NavigationButton onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
      <NavigationItemInner icon={<SvgIcon name="previous" />} title="Было" />
    </NavigationButton>
  );
};
