import React from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import Notification from './notifications/Notification';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { LOCAL_CONTACT } from 'redux/constants';
import { StyledMainWrapper } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts?.length) {
      dispatch({ type: LOCAL_CONTACT, payload: contacts });
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <StyledMainWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList />
      ) : (
        <Notification message={'No contact'} />
      )}
    </StyledMainWrapper>
  );
};
