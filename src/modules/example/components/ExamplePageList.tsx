import {appPath} from 'app/model/constants';
import {ExampleHead} from 'modules/example/components/ExampleHead';
import {ExampleList} from 'modules/example/components/ExampleList';
import React from 'react';

export const ExamplePageList = () => {
  return (
    <>
      <ExampleHead linkText="Главная" linkUrl={appPath.home} title="Пример списка" />
      <ExampleList />
    </>
  );
};
