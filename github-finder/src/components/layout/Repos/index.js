import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from '../RepoItem';


const index = ({ repos }) => {
  return repos.map( repo =>  (
  	<RepoItem key={repo.id} repo={repo} />
  ) );
}

index.PropTypes = {
	repos: PropTypes.array.isRequired
};

export default index;