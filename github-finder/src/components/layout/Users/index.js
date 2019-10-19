import React from 'react'
import PropTypes from 'prop-types';

import {
  UserContainer
} from './style';

import UserItem from '../UserItems';

import Spinner from '../Spinner';

const Users = ({ loading, users }) => { 
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

Users.propTypes = {
  users : PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;