/** @format */

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RippleIntro from "./Pages/ripple-intro/ripple-intro";
import Homepage from "./Pages/Homepage/Homepage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Parse from "parse";
import UserModel from "./Models/UserModel"



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: new UserModel(Parse.User.current()),
      // allUsers: null
      // {
      //   "userID": "2020001",
      //   "userName": "ATHasman",
      //   "pass":  "atripple123"
      // }
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(user) {
    this.setState({
      activeUser: user
    });
  }

  handleLogout(user) {
    this.setState({
      activeUser: null
    });
    
    Parse.User.logOut()
    .then(() => {
      const currentUser = Parse.User.current();
      console.log("user logged out: ",currentUser);
    })
  }

  // setCurrentUsers() {
  //   Parse.User.logIn("newUserName", "#Password123")
  //     .then(user => {
  //       const currentUser = Parse.User.current();
  //       console.log("Current logged in user", currentUser);
  //       this.setState({
  //         allUsers: currentUser
  //       });
  //     })
  //     .catch(error => {
  //       console.error("Error while logging in user", error);
  //     });
  // }

  render() {
    const { activeUser } = this.state;

    return (
      <Switch>
        <Route exact path="/">
          <Homepage activeUser={activeUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
        </Route>
        <Route exact path="/intro">
          <RippleIntro />
        </Route>
        <Route exact path="/login">
          <LoginPage activeUser={activeUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout}  />
        </Route>
        <Route exact path="/signup">
          <SignupPage activeUser={activeUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard activeUser={activeUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        </Route>
      </Switch>
    );
  }
}
