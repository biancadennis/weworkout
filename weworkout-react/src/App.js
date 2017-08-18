import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Main from './Main'
import ProfileList from './ProfileList'
import Profile from './Profile'
import Matchlist from './Matchlist'
import Signup from './Signup'
import Login from './Login'
import Userpage from './Userpage'
import './App.css';

const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <nav>
            <Link className='navLinks' to="/">Home</Link>
            <Link className='navLinks' to="/">WeWorkOut</Link>
            <Link className='navLinks' to="/">Logout</Link>

          </nav>
          <Route path="/"               component={Main} exact />
          <Route path="/profiles"       component={ProfileList} exact />
          <Route path="/signup"         component={Signup} exact/>
          <Route path="/login"          component={Login} exact />
          <Route path="/profiles/:id"   component={Profile} />
          <Route path="/matchlist"      component={Matchlist} />
          <Route path="/userpage"      component={Userpage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
