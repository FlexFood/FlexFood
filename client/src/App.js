import React, { Component } from 'react';
import AuthService from "./services/AuthService.js";
import { Route, Link } from "react-router-dom";

import './App.css';

import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup"


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.authService = new AuthService();

    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  render() {
   
    return (
      <div className="App">
      <Navbar user={this.state.user} logout={this.logout} getUser={this.getUser}/>
        <Route
          path="/signup"
          render={() => <Signup getUser={this.getUser} />}
        />
        <Route path="/login" render={() => <Login getUser={this.getUser} />} />
      </div>
    );
  }
}

export default App;