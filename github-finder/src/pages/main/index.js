import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Alert from '../../components/layout/Alert';
import User from '../../components/layout/User';
import Navbar from '../../components/layout/Navbar/Navbar';
import About from '../about';
import Home from '../home/home';
import GithubState from '../../context/github/GithubState';
import AlertState from '../../context/alert/AlertState';
import NotFound from '../../pages/notfound';

const Main = () => {    

    return (
        <GithubState>
          <AlertState>
            <BrowserRouter>          
               <Navbar />
                <div className="container">
                  <Alert />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/user/:login' component={User} />
                    <Route component={NotFound} />
                  </Switch>
                </div>           
            </BrowserRouter>
          </AlertState>
        </GithubState>
      )
};

export default Main;