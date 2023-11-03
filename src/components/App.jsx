import React from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import Notification from './notifications/Notification';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { addContact, deleteContact, filterContactAC } from 'redux/actions';
import { LOCAL_CONTACT } from 'redux/constants';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  const handelOnFilter = e => {
    // setFilter(e.target.value);
    dispatch(filterContactAC(e.target.value));
  };

  const handleAddContact = newContact => {
    const dublicate = contacts.find(
      contact => contact.name === newContact.name
    );

    if (dublicate) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
    }
  };
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts?.length) {
      dispatch({ type: LOCAL_CONTACT, payload: contacts });
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContact = getFilterContacts();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm onAddContact={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handelOnFilter} />
      {contacts.length ? (
        <ContactList
          contacts={filterContact}
          deletedContact={handleDeleteContact}
        />
      ) : (
        <Notification message={'No contact'} />
      )}
    </div>
  );
};
