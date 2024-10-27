import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </Fragment>
      </PersistGate>
    </Provider>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
