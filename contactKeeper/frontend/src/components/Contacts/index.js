import React, { useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from '../ContactItem';

import styled from 'styled-components';

const Contacts = () => {

  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <>
      {contacts.map( contact => (
        <ContactItem key={contact.id} contact={contact}/>
      ) )}
    </>
  )
}

export default Contacts;