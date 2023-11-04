import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: { phonebook: persistedReducer },
});
export const persistor = persistStore(store);
