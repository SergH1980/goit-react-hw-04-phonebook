import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactItemStyled,
  ContactItemName,
  ContactItemNumber,
  ContactItemButton,
} from './ContactItem.styled';

export default function ContactItem({ contacts, onDelete }) {
  function toHandleDelete(event) {
    onDelete(event.currentTarget);
  }

  return contacts.map(contact => (
    <ContactItemStyled key={contact.id}>
      <ContactItemName>{contact.name}:</ContactItemName>
      <ContactItemNumber>{contact.number}</ContactItemNumber>
      <ContactItemButton id={contact.id} type="button" onClick={toHandleDelete}>
        Delete
      </ContactItemButton>
    </ContactItemStyled>
  ));
}

ContactItem.protTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
