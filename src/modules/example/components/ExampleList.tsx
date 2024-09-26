import {useAppSelector} from 'app/lib/hooks';
import {appPath} from 'app/model/constants';
import {exampleIdKey} from 'modules/example/model/constants';
import {exampleActions} from 'modules/example/model/reducers';
import {selectExampleList} from 'modules/example/model/selectors';
import {TExample} from 'modules/example/model/types';
import {useLoadItem} from 'modules/status/lib/useLoadItem';
import React from 'react';
import {Link} from 'react-router-dom';
import './ExampleList.less';

const fields: Array<keyof TExample> = ['name', 'email', 'age', 'balance'];

export const ExampleList = () => {
  const list = useAppSelector(selectExampleList);
  const load = useLoadItem(exampleActions.getList.type);

  if ('undefined' === typeof load) {
    return null;
  }

  if (load) {
    return <div>Loading...</div>;
  }

  return (
    <table className="ExampleList">
      <thead>
        <tr>
          {fields.map((field) => {
            return (
              <th className="ExampleList__Cell" key={field}>
                {field}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item[exampleIdKey]}>
              {fields.map((field) => {
                return (
                  <td className="ExampleList__Cell" key={field}>
                    <Link to={`${appPath.example}/${item[exampleIdKey]}`}>{`${item[field]}`}</Link>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
