import React from 'react'
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  ImageItem,
  UserContainer,
  UserName,
  UserLink
} from './style';

const index = ({ user : { login, avatar_url, html_url } }) => {
  
  return (
    <UserContainer className="card text-center">
      <ImageItem className="round-img" src={avatar_url} alt={login} />
      <UserName>{login}</UserName>
      <UserLink><Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link></UserLink>
    </UserContainer>
  )
}

index.propTypes = {
  user : PropTypes.object.isRequired,
}

export default index;