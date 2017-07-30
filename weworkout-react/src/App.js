import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Main from './Main'
import Profile from './Profile'
import Matches from './Matches'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Main</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/matches">Matches</Link>
          </nav>
          <Route path="/"        component={Main} exact />
          <Route path="/Profile"   component={Profile} />
          <Route path="/Matches" component={Matches} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;