import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './style';

import Navbar from './components/layout/Navbar/Navbar';
import Main from './pages/main';
import About from './pages/about';

export default function App() {
  return (
    <BrowserRouter>
    	<GlobalStyles />
    	<Navbar />
    	<Switch>
    		<Route exact path="/" component={Main} />    		
    		<Route path="/about" component={About} />    		
    	</Switch>
    </BrowserRouter>
  )
}