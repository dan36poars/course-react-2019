import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filterContact, clearFilter, filtered } = contactContext;

  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  },[filtered]);

  const handleFilter = (e) => {
    if (text.current.value !== '') {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input type="text" ref={text} placeholder="Filter Contacts..." onChange={handleFilter} />
    </form>
  )
};

export default ContactFilter;