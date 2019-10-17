import React from 'react'

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
      <UserLink><a href={html_url} className="btn btn-dark btn-sm my-1">More</a></UserLink>
    </UserContainer>
  )
}

index.propTypes = {
  user : PropTypes.object.isRequired,
}

export default index;