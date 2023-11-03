import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './constants';

export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });
export const addContact = arr => ({ type: ADD_CONTACT, payload: arr });
export const filterContactAC = text => ({
  type: FILTER_CONTACT,
  payload: text,
});
