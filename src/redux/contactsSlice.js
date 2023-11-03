// const { createSlice } = require('@reduxjs/toolkit');
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    {
      id: '1',
      name: 'ivan1',
      number: '1111-2222',
    },
    {
      id: '2',
      name: 'vlad1',
      number: '3333-4444',
    },
    {
      id: '3',
      name: 'petro1',
      number: '5555-6666',
    },
    {
      id: '4',
      name: 'max1',
      number: '7777-7777',
    },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      const index = state.contacts.findIndex(contact => contact.id === payload);
      state.contacts.splice(index, 1);
    },
    filterContactAC(state, { payload }) {
      state.filter = payload;
    },
    LOCAL_CONTACT(state, { payload }) {
      state.contacts = payload;
    },
  },
});

export const { addContact, deleteContact, filterContactAC, LOCAL_CONTACT } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
