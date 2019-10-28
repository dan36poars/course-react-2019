import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './style.js';

import Navbar from './../components/Navbar';
import Home from './home';
import About from './about';
import Register from './register';
import Login from './login';

import ContactState from '../context/contact/ContactState';
import AuthState from '../context/auth/AuthState';


function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <GlobalStyles />    
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />         
            <Route exact path="/register" component={Register} />         
            <Route exact path="/login" component={Login} />         
          </Switch>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App;