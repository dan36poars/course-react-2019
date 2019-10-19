import React, { useContext } from 'react';

import {
  UserContainer
} from './style';

import UserItem from '../UserItems';

import Spinner from '../Spinner';

import GithubContext from '../../../context/github/githubContext';

const Users = () => { 

    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if (loading) {
      return <Spinner />
    } else {
      return (
        <UserContainer>
          {users.map( user => (
            <UserItem key={user.id} user={user} />
          ))}
        </UserContainer>
      )
    }
};

export default Users;