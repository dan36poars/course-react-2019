import React, { useContext, useEffect } from 'react';
import Contacts from '../../components/Contacts';
import ContactForm from '../../components/ContactForm';
import FilterContact from '../../components/ContactFilter';

import AuthContext from '../../context/auth/AuthContext';

const Home = () => {

    const authContext = useContext(AuthContext);

    const { loadUser } = authContext;

    useEffect( () => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="grid-2 container">
        	<div>
        		<ContactForm />
        	</div>
        	<div>
                <FilterContact />
        		<Contacts />
        	</div>
        </div>
    )
};

export default Home;
