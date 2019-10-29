import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './style.js';

import Navbar from './../components/Navbar';
import Home from './home';
import About from './about';
import Register from './register';
import Login from './login';
import Alerts from '../components/Alerts';

import ContactState from '../context/contact/ContactState';
import AuthState from '../context/auth/AuthState';
import AlertState from '../context/alert/AlertState';

import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <GlobalStyles />    
            <Navbar/>
            <div className="container">
              <Alerts />            
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />         
              <Route exact path="/register" component={Register} />         
              <Route exact path="/login" component={Login} />         
            </Switch>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}

export default App;