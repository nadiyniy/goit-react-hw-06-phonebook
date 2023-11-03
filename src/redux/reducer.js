import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  LOCAL_CONTACT,
} from './constants';

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

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    case FILTER_CONTACT:
      return { ...state, filter: action.payload };
    case LOCAL_CONTACT:
      return { ...state, contacts: action.payload };

    default:
      return state;
  }
};
