import {appPath} from 'app/model/constants';
import {store} from 'app/model/store';
import {Config} from 'modules/config/components/Config';
import {Layout} from 'modules/layout/components/Layout';
import {Rating} from 'modules/rating/components/Rating';
import React, {useLayoutEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'styles/index.less';

export const App = () => {
  useLayoutEffect(() => {
    document.body.classList.remove('opacity_hidden');
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Config>
          <Layout>
            <Routes>
              <Route element={<Rating />} path={appPath.home} />
            </Routes>
          </Layout>
        </Config>
      </BrowserRouter>
    </Provider>
  );
};
