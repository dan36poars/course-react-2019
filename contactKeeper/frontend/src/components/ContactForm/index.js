import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {

  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });


  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);      
    } else {
      updateContact(contact);
    }
    setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });
    handleClear();
  }

  const handleClear = () => {
    clearCurrent();
  }

  const { email, name, phone, type } = contact;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">{ current ? `Edit Contact` : `Add Contact` }</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={handleInput} />
      <input type="email" placeholder="Email" name="email" value={email} onChange={handleInput} />
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleInput} />
      <h5>Contact Type</h5>
      <label htmlFor="personal">
        <input id="personal" type="radio" name="type" value="personal" checked={type === 'personal'} onChange={handleInput}/> Personal{' '}
      </label>
      <label htmlFor="professional">
        <input id="professional" type="radio" name="type" value="professional" checked={type === 'professional'} onChange={handleInput}/> Professional
      </label>
      <div>
        <input type="submit" value={ current ? `Update Contact` : `Add Contact` } className="btn btn-primary btn-block" />
      </div>
      { current && (
        <div>
          <button className="btn btn-light btn-block" onClick={handleClear}>Clear</button>
        </div>
      ) }
    </form>
  )
}

export default ContactForm;