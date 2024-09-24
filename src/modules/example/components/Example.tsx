import {useAppDispatch} from 'app/hooks';
import {actionExampleGetList} from 'modules/example/actions';
import {ExamplePageItem} from 'modules/example/components/ExamplePageItem';
import {ExamplePageList} from 'modules/example/components/ExamplePageList';
import {examplePaths} from 'modules/example/constants';
import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

export const Example = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionExampleGetList);
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<ExamplePageList />} path={examplePaths.list} />
      <Route element={<ExamplePageItem />} path={examplePaths.item} />
    </Routes>
  );
};
