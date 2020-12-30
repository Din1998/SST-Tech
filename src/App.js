import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import TeamSection from './components/pages/Team';
import WorkSection from './components/pages/Work';
import Service from './components/pages/Service';

function App() {
  return (
   <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Team" exact component={TeamSection} />
        <Route path="/Work" exact component={WorkSection} />
        <Route path="/Service" exact component={Service} />
      </Switch>
    </Router>
   </div>
  );
}

export default App;
