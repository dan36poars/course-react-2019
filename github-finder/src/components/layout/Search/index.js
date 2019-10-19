import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchContainer,
  FormSearch,
  TextInput,
  Button
} from './style';

const Search = ({ showClear, searchUsers, setAlert, handleClearUsers }) => {

  const [text, setText] = useState('');

  const handleInputSearch = (e) => setText(e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  } 

    return (
      <SearchContainer>
        <FormSearch onSubmit={handleSubmitForm} >
          <TextInput type="text" name="text" placeholder="Search Users..." value={text} onChange={handleInputSearch} />
          <Button type="submit" value="Search" className="btn btn-dark btn-block" />
        </FormSearch>
        {showClear && (
          <Button type="button" onClick={handleClearUsers} className="btn btn-light btn-block" value="Clear" />
        )}
      </SearchContainer>
    )
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  handleClearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};


export default Search;
