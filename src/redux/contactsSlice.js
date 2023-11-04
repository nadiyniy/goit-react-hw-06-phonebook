import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
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
  },
});

export const { addContact, deleteContact, filterContactAC } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
