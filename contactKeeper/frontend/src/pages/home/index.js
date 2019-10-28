import React from 'react';
import styled from 'styled-components';
import Contacts from '../../components/Contacts';
import ContactForm from '../../components/ContactForm';

const Home = () => {
    return (
        <div className="grid-2 container">
        	<div>
        		<ContactForm />
        	</div>
        	<div>
        		<Contacts />
        	</div>
        </div>
    )
};

export default Home;
