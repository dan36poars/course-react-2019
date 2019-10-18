import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import Users from '../../components/layout/Users';
import Search from '../../components/layout/Search';
import Alert from '../../components/layout/Alert';
import User from '../../components/layout/User';
import Navbar from '../../components/layout/Navbar/Navbar';
import About from '../about';

export class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            user: {},
            repos: [],
            loading: false,
            alert : null
        }
    };


    searchUsers = async (text) => {
        this.setState({ loading: true });
        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ users: response.data.items, loading: false });
    };

    getUser = async (username) => {
      this.setState({ loading: true });
      const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ user: response.data, loading: false });
    };

    getUsersRepos = async (username) => {
      this.setState({ loading: true });
      const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ repos: response.data, loading: false });
    }

    handleClearUsers = () => {
        this.setState({
            users: [],
            loading: false
        });
    };

    setAlert = ( msg, type ) => {
      this.setState({
        alert: {
          msg,
          type
        }
      });
      setTimeout(() => this.setState({
        alert: null
      }), 5000);
    };

  render() {
    const { users, user, loading, repos } = this.state;
      return (
        <BrowserRouter>          
           <Navbar />
            <div className="container">
              <Alert alert={this.state.alert}/>
              <Switch>
                <Route 
                  exact 
                  path="/"
                  render={ props => (
                    <>
                    <Search 
                      searchUsers={this.searchUsers} 
                      handleClearUsers={this.handleClearUsers}
                      showClear={ users.length > 0 ? true : false }
                      setAlert={this.setAlert}
                    />                    
                    <Users loading={loading} users={users} />
                    </>
                  ) }
                />
                <Route path='/about' component={About} />
                <Route path='/user/:login' render={ props => (
                  <User 
                    {...props} 
                    getUser={this.getUser}
                    getUsersRepos={this.getUsersRepos}
                    user={user}
                    repos={repos}
                    loading={loading} 
                  /> 
                  )}
                />
              </Switch>
            </div>
           
        </BrowserRouter>
      )
  }
};

export default index;