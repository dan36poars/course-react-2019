import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Nav, 
    NavText
} from './style';


export class Navbar extends Component {

  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <Nav className="navbar bg-primary" >
        <NavText>
          <i className={this.props.icon} /> { this.props.title }
        </NavText>
      </Nav>
    )
  }
}

export default Navbar;