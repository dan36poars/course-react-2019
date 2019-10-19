import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import Users from '../../components/layout/Users';
import Search from '../../components/layout/Search';
import Alert from '../../components/layout/Alert';
import User from '../../components/layout/User';
import Navbar from '../../components/layout/Navbar/Navbar';
import About from '../about';

import GithubState from '../../context/github/GithubState';

const Main = () => {


    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // const searchUsers = async (text) => {
    //     setLoading(true);
    //     const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     setUsers(response.data.items);
    //     setLoading(false);
    // };

    // const getUser = async (username) => {
    //   setLoading(true);
    //   const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //   setUser(response.data);
    //   setLoading(false);
    // };

    const getUsersRepos = async (username) => {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setRepos(response.data);
      setLoading(false);
    }

    // const handleClearUsers = () => {
    //     setUsers([]);
    //     setLoading(false);       
    // };

    const showAlert = ( msg, type ) => {
      setAlert({ msg, type });

      setTimeout(() => setAlert(null) , 5000);
    };

    return (
        <GithubState>
          <BrowserRouter>          
             <Navbar />
              <div className="container">
                <Alert alert={alert}/>
                <Switch>
                  <Route 
                    exact 
                    path="/"
                    render={ props => (
                      <>
                      <Search                         
                        setAlert={showAlert}
                      />                    
                      <Users />
                      </>
                    ) }
                  />
                  <Route path='/about' component={About} />
                  <Route path='/user/:login' render={ props => (
                    <User 
                      {...props}                      
                      getUsersRepos={getUsersRepos}
                      repos={repos}
                    /> 
                    )}
                  />
                </Switch>
              </div>           
          </BrowserRouter>
        </GithubState>
      )
};

export default Main;