import React from 'react'
import PropTypes from 'prop-types';
import { 
  TagLink
} from './style';

function index({ repo }) {
  return (
    <div className="card" >
      <h3>
        <TagLink href={repo.html_url}>{repo.name}</TagLink>
      </h3>
    </div>
  )
}

index.propTypes = {
    repo: PropTypes.object.isRequired
};

export default index;