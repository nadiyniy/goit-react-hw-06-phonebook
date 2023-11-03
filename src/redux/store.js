import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { contactReducer } from './reducer';

const rootReducer = combineReducers({
  phonebook: contactReducer,
});
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
