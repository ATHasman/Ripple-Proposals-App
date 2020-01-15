import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import RippleIntro from './Pages/ripple-intro/ripple-intro';
import Homepage from './Pages/Homepage/Homepage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';


export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/intro">
          <RippleIntro/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    )
  }
}
