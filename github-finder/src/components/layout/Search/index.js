import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../../context/github/githubContext';

import {
  SearchContainer,
  FormSearch,
  TextInput,
  Button
} from './style';

const Search = ({ setAlert }) => {

  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const handleInputSearch = (e) => setText(e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  } 

    return (
      <SearchContainer>
        <FormSearch onSubmit={handleSubmitForm} >
          <TextInput type="text" name="text" placeholder="Search Users..." value={text} onChange={handleInputSearch} />
          <Button type="submit" value="Search" className="btn btn-dark btn-block" />
        </FormSearch>
        {githubContext.users.length > 0 && (
          <Button type="button" onClick={githubContext.handleClearUsers} className="btn btn-light btn-block" value="Clear" />
        )}
      </SearchContainer>
    )
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};


export default Search;
