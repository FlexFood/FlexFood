import React, { Component } from "react";
import AuthService from "./services/AuthService.js";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import EdamamService from "./services/EdamamService";
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
      recipes:null,
      search: "",
      redirectToRecipes: false
    };

    this.authService = new AuthService();

    this.edamamService = new EdamamService();

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


  handleFormSubmit = e => {
    e.preventDefault();

    const search = this.state.search;

    this.edamamService.getByLabel(search)
    .then(recipes => {
      this.setState({ ...this.state, recipes: recipes.data, redirectToRecipes: true });
    });
  };


  handleChange = e => {
    const { value } = e.target;
    this.setState({ ...this.state, search: value });
  };



  render() {
    return (
      <div className="App">
        <Navbar
          user={this.state.user}
          logout={this.logout}
          getUser={this.getUser}
        />
        <Switch>
          <Route
            exact path="/"
            render={()=><Search
              handleFormSubmit={this.handleFormSubmit}
              handleChange={this.handleChange}
              redirectToRecipes={this.state.redirectToRecipes}
              />}
          />
          <Route
            exact path="/recipes"
            render={() => <Recipes 
              search={this.state.search}
              recipes={this.state.recipes}/>}
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
