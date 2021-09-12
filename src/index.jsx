import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '@components/App';
import { configureStore } from '@redux/store';
import './index.css';

const store = configureStore();

const renderApp = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp);
}

renderApp();
