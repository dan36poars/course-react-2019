import React from 'react';

import {
  NotFoundContainer,
  NotFoundLead
} from './style';

import ImageNotFound from '../../assets/page-dont-found.jpg';

const Component = () => {
    return (
      <NotFoundContainer>
        <img src={ImageNotFound} alt="Not Found Page" />
        <NotFoundLead>Error 404</NotFoundLead>
        <h1>Not Found Page</h1>
        <p className="lead">The page you are looking for does not exist...</p>
      </NotFoundContainer>
    );
};

export default Component;

