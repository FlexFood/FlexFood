import React, { Component } from "react";
import AuthService from "./services/AuthService.js";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Recipes from "./components/recipes";
import Search from "./components/search";
import AdvancedSearch from "./components/advancedSearch";
import Navbar from "./components/navbar";
import Userbar from "./components/userbar";
import Login from "./components/login";
import Signup from "./components/signup";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
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
        <Userbar
          className="navbar"
          user={this.state.user}
          logout={this.logout}
          getUser={this.getUser}
        />
        <Navbar />
        <Switch>
          <Route
            exact path="/"
            render={() => <Search />}
          />
          <Route
            exact path="/recipes"
            render={() => <Recipes />}
          />
          <Route
            exact path="/advancedSearch"
            render={() => <AdvancedSearch />}
          />
          <Route
            path="/signup"
            render={() => <Signup getUser={this.getUser} />}
          />
          <Route
            path="/login"
            render={() => <Login getUser={this.getUser} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
