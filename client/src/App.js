import React, { Component } from "react";
import AuthService from "./services/AuthService.js";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Recipes from "./components/recipes";
import Search from "./components/search";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      search: ""
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

  handleChange = e => {
    const { value } = e.target;
    this.setState({ ...this.state, search: value });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          className="navbar"
          user={this.state.user}
          logout={this.logout}
          getUser={this.getUser}
        />
        <Search handleChange={this.handleChange} />
        <Switch>
          {/* <Route
            exact path="/"
            component={Search}
            handleChange={this.handleChange}
            search={this.state.search}
          /> */}
          <Route
            exact path="/recipes"
            searchPet={this.state.search}
            component={Recipes}
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
