import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ContactContext from '../../context/contact/ContactContext';

const ContactItem = ({ contact }) => {

  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, phone, type, email } = contact;

  const handleDelete = () => {
    deleteContact(id);
    clearCurrent();
  }

  return (
    <div className="card bg-light" >
      <h4 className="text-primary text-left">{name}{' '}
        <SpanHeader className={
            'badge ' + 
            ( type === 'professional' ? 'badge-success' : 'badge-primary' )
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </SpanHeader>
      </h4>
      <ul className="list">     
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete} >Delete</button>
      </p>
    </div>
  )
};

ContactItem.propType = {
  contact : PropTypes.object.isRequired
};

const SpanHeader = styled.span`
  float: right;
`;

export default ContactItem;