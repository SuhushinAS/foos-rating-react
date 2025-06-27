import {App} from 'app/components/App';
import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  if (module.hot) {
    module.hot.accept('app/components/App', () => {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    });
  }
}

const onRegisterError = (error) => {
  console.error('SW registration failed: ', error);
};

const onWindowLoad = () => {
  if ('serviceWorker' in navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('/foos-rating/sw.js').catch(onRegisterError);
  }
};

window.removeEventListener('load', onWindowLoad);
window.addEventListener('load', onWindowLoad);
