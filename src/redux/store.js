import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from './auth/auth-slice';
import categoriesReducer from './categories/categories-slice';
import balanceReducer from './balance/balance-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'authorizationType'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: authPersistReducer,
  categories: categoriesReducer,
  balance: balanceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devtools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
