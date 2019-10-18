import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Repos from '../../layout/Repos';
import Spinner from '../../layout/Spinner';
import { ImgAvatar } from './style';

export class index extends Component {
  componentDidMount() {
      this.props.getUser(this.props.match.params.login);
      this.props.getUsersRepos(this.props.match.params.login);
  };

static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
};

  render() {
     const {
        name,
        avatar_url,
        location,
        company,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
     } = this.props.user;

      const { loading, repos } = this.props;

      if (loading) return <Spinner />

    return (
      <>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable: {' '}
      { hireable ? <i className="fas fa-check text-sucess" /> : <i className="fas fa-times-circle text-danger" /> }
      <div className="card grid-2">
        <div className="all-center">
          <ImgAvatar src={avatar_url} className="round-img" alt={name} />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          { bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          ) }
          <a href={html_url} className="btn btn-dark my-1" target="_blanck">Visit Git Hub Profile</a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div> 
      </div>

      <div className="card text-center">
        <div class="badge badge-primary">Followers: {followers}</div>
        <div class="badge badge-success">Following: {following}</div>
        <div class="badge badge-light">Public Repos: {public_repos}</div>
        <div class="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
      </>
    )
  }
}

export default index;