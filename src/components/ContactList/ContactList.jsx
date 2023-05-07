import React from 'react';
import { ContactListStyle, EmptyList } from './ContactList.styled';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length < 1) {
    return <EmptyList>No contacts in your phonebook!</EmptyList>;
  } else {
    return (
      <ContactListStyle>
        <ContactItem contacts={contacts} onDelete={onDelete} />
      </ContactListStyle>
    );
  }
}
