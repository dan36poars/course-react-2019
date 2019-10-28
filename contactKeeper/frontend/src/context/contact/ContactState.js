import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
    {
      id: 1,
      name: 'Jill Daemont',
      email: 'jill@gmail.com',
      phone: '51999999999',
      type: 'personal'
    },
    {
      id: 2,
      name: 'Gnome Patron',
      email: 'gnomo@hotmail.com',
      phone: '51888888888',
      type: 'personal'
    },
    {
      id: 3,
      name: 'Felicity City',
      email: 'felicity@bol.com',
      phone: '5111111111',
      type: 'professional'
    },
    {
      id: 4,
      name: 'Peace all',
      email: 'peace@gmail.com',
      phone: '51555555555',
      type: 'personal'
    }
    ],
    current : null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = ( contact ) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  } 

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  }

  // Update contact
  const updateContact = ( contact ) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  }

  // Filter contacts
  const filterContact = ( text ) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  }

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  }

  return (
    <ContactContext.Provider
    value={{
      contacts: state.contacts,
      current: state.current,
      filtered: state.filtered,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent,
      updateContact,
      filterContact,
      clearFilter
    }}>
      { props.children }
    </ContactContext.Provider>
  );

};

export default ContactState;