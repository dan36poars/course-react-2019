import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SearchContainer,
  FormSearch,
  TextInput,
  Button
} from './style';

export class index extends Component {

  constructor(props) {
    super(props)  
    this.state = {
       text: '' 
    }
  }

  handleInputSearch = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: ''
      });
    }
  } 

  render() {
    const { showClear, handleClearUsers } = this.props;
    const { text } = this.state;
    return (
      <SearchContainer>
        <FormSearch onSubmit={this.handleSubmitForm} >
          <TextInput type="text" name="text" placeholder="Search Users..." value={text} onChange={this.handleInputSearch} />
          <Button type="submit" value="Search" className="btn btn-dark btn-block" />
        </FormSearch>
        {showClear && (
          <Button type="button" onClick={handleClearUsers} className="btn btn-light btn-block" value="Clear" />
        )}
      </SearchContainer>
    )
  }
}

index.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  handleClearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}


export default index;
