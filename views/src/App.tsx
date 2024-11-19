import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import { ToastContainer } from 'material-react-toastify';
import ProtectedRoute from './utils/ProtectedRoutes';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <BrowserRouter>
            <Routes>
              {/* Public route */}
              <Route path="/admin" element={<Login />} />

              {/* Protected routes */}
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <Pages />
                    <ToastContainer />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </Fragment>
      </PersistGate>
    </Provider>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
