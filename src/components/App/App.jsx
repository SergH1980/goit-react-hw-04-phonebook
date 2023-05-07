import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalStyle } from '../GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

import { AppStyle } from './App.styled';

import ContactForm from '../ContactForm/Form';
import ContactList from '../ContactList/ContactList';
import Section from '../Section/Section';
import ContactFilter from '../ContactFilter/ContactFilter';

const toastSettings = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState(``);

  function notify(data) {
    toast.warn(`${data} is already in contacts`, toastSettings);
  }

  function addContact(newContact) {
    contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    )
      ? notify(newContact.name)
      : setContacts(prevState => [newContact, ...prevState]);
  }

  function deleteContact(expiredContact) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== expiredContact.id)
    );
  }

  function changeFilter(event) {
    setFilter(event.target.value);
  }

  function getVisibleContacts() {
    const adjustedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(adjustedFilter)
    );
    return visibleContacts;
  }

  return (
    <AppStyle>
      <Section title="Phonebook">
        <ContactForm onAdd={addContact} />
      </Section>
      <Section title={'Contacts'}>
        <ContactFilter value={filter} onFilter={changeFilter} />
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </AppStyle>
  );
}
