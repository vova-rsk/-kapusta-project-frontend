import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App';
import AuthView from './views/AuthView';
import PrivatRoute from './components/PrivatRoute';
import './index.css';
import FinanceView from './views/FinanceView';
import ReportsView from './views/ReportsView';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<AuthView />} />
              <Route path="auth" element={<AuthView />} />
              <Route
                path="finance"
                element={
                  <PrivatRoute>
                    <FinanceView />
                  </PrivatRoute>
                }
              >
                <Route path="income" element={<FinanceView />} />
                <Route path="cost" element={<FinanceView />} />
              </Route>
              <Route
                path="reports"
                element={
                  <PrivatRoute>
                    <ReportsView />
                  </PrivatRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
