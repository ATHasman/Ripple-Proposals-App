import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import RippleIntro from './Pages/ripple-intro/ripple-intro';
import Homepage from './Pages/Homepage/Homepage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignupPage from './Pages/SignupPage/SignupPage';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       activeUser: null
      // {
      //   "userID": "2020001",
      //   "userName": "ATHasman",
      //   "pass":  "atripple123"
      // }
    }
  }
  

  render() {
    const { activeUser } = this.state;

    return (
      <Switch>
        <Route exact path="/">
          <Homepage activeUser={activeUser}/>
        </Route>
        <Route exact path="/intro">
          <RippleIntro/>
        </Route>
        <Route exact path="/login">
          <LoginPage activeUser={activeUser}/>
        </Route>
        <Route exact path="/signup">
          <SignupPage activeUser={activeUser}/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    )
  }
}
