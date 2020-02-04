/** @format */

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import RippleIntro from "./Pages/ripple-intro/ripple-intro";
import Homepage from "./Pages/Homepage/Homepage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Parse from "parse";
import UserModel from "./Models/UserModel";
import HomeNavBar from "./Components/HomeNavBar";
import Templates from "./Pages/Templates/Templates";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial state for activeUser according to Parse.User.current() value (Null / New UserModel(Parse.User.current())) 
      activeUser: Parse.User.current() ? new UserModel(Parse.User.current()) : null
      // allUsers: null
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    console.log(Parse.User.current())
  }

  handleLogin(user) {
    this.setState({
      activeUser: user
    });
  }

  handleLogout(user) {
    // logges out parse user from session
    Parse.User.logOut().then(() => {
      // access and and logs current user {Null/Undefined}
      const currentUser = Parse.User.current();
      console.log("Parse.User.current(): ", currentUser);
      // change state active user - upon successful login
      this.setState({
        activeUser: null
      });
    });
  }

  render() {
    const { activeUser } = this.state;
 
    return (
      <div className="mainApp">
        <HomeNavBar
          activeUser={activeUser}
          handleLogout={this.handleLogout}
          variant="dark"
          bg="primary"
          page="Home"
        />

        <Switch>
          <Route exact path="/">
            <Homepage
              activeUser={activeUser}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
            />
          </Route>
          <Route exact path="/intro">
            <RippleIntro />
          </Route>
          <Route exact path="/login">
            <LoginPage
              activeUser={activeUser}
              handleLogin={this.handleLogin}
            />
          </Route>
          <Route exact path="/signup">
            <SignupPage
              activeUser={activeUser}
              handleLogin={this.handleLogin}
            />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard
              activeUser={activeUser}
              handleLogin={this.handleLogin}
            />
          </Route>
          <Route exact path="/templates">
            <Templates
              activeUser={activeUser}
              handleLogin={this.handleLogin}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
