import { combineReducers } from 'redux';
import { contactReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  phonebook: contactReducer,
});

export const store = configureStore({ reducer: rootReducer });
