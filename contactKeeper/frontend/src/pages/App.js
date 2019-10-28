import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './style.js';

import Navbar from './../components/Navbar';
import Home from './home';
import About from './about';

import ContactState from '../context/contact/ContactState';


function App() {
  return (
    <ContactState>
      <Router>
        <GlobalStyles />    
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />         
        </Switch>
      </Router>
    </ContactState>
  )
}

export default App;