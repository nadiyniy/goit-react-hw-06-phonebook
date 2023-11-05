import React from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import Notification from './notifications/Notification';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { StyledMainWrapper } from './App.styled';
import { GrContactInfo } from 'react-icons/gr';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <StyledMainWrapper>
      <div>
        <h1>
          <GrContactInfo /> <span>Phonebook</span>
        </h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
      </div>
      <div>
        {contacts.length ? (
          <ContactList />
        ) : (
          <Notification message={'No contact...'} />
        )}
      </div>
    </StyledMainWrapper>
  );
};
