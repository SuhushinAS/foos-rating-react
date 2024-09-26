import {useAppSelector} from 'app/lib/hooks';
import {appPath} from 'app/model/constants';
import {ExampleHead} from 'modules/example/components/ExampleHead';
import {ExampleItem} from 'modules/example/components/ExampleItem';
import {getExampleItem, selectExampleData} from 'modules/example/model/selectors';
import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

export const ExamplePageItem = () => {
  const {id = ''} = useParams();
  const exampleData = useAppSelector(selectExampleData);

  const example = useMemo(() => {
    return getExampleItem(exampleData, id);
  }, [exampleData, id]);

  return (
    <>
      <ExampleHead linkText="Пример списка" linkUrl={appPath.example} title={example.name} />
      <ExampleItem example={example} />
    </>
  );
};
