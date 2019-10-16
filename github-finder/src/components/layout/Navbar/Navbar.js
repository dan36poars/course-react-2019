import React from 'react';
import PropTypes from 'prop-types';
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