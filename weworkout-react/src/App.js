import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Main from './Main'
import ProfileList from './ProfileList'
import Profile from './Profile'
import Matchlist from './Matchlist'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Main</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="/matches">Matches</Link>
          </nav>
          <Route path="/"         component={Main} exact />
          <Route path="/profiles" component={ProfileList} exact />
          <Route path="/profiles/:id" component={Profile} />
          <Route path="/matchlist"  component={Matchlist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
