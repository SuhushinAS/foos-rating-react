import {appPath} from 'app/model/constants';
import {Layout} from 'modules/layout/components/Layout';
import {Rating} from 'modules/rating/components/Rating';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import 'styles/index.less';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Rating />} path={appPath.home} />
      </Routes>
    </Layout>
  );
};
