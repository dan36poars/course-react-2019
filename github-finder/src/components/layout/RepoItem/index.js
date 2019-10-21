import React from 'react'
import PropTypes from 'prop-types';
import { 
  TagLink
} from './style';

const RepoItem = ({ repo }) => {
  return (
    <div className="card" >
      <h3>
        <TagLink href={repo.html_url} target="_blank">{repo.name}</TagLink>
      </h3>
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};

export default RepoItem;