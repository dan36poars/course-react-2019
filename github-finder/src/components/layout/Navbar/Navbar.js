import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { 
    Nav, 
    NavText
} from './style';


const Navbar = ({ icon, title }) => { 
    return (
      <Nav className="navbar bg-primary" >
        <NavText>
          <i className={icon} /> {title}
        </NavText>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

export default Navbar;