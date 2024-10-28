import {appPath} from 'app/model/constants';
import {store} from 'app/model/store';
import {Layout} from 'modules/layout/components/Layout';
import {Rating} from 'modules/rating/components/Rating';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'styles/index.less';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Rating />} path={appPath.home} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
