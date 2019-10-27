import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './style.js';

import Navbar from './../components/Navbar';
import Home from './home';
import About from './about';


function App() {
  return (
    <Router>
      <GlobalStyles />    
      <Navbar/>
      <Switch>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Switch>
    </Router>
  )
}

export default App;