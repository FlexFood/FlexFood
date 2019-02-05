import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthService from "./services/AuthService.js";
import Userbar from "./components/userbar";
import EditUser from "./components/editUser";
import Navbar from "./components/navbar";
import AdvancedSearch from "./components/advancedSearch";
import Converter from "./components/converter";
import Menu from "./components/menu";
import Search from "./components/search";
import Recipes from "./components/recipes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      redirectToHome: false,
      redirectToRecipes: false
    };
    this.authService = new AuthService();
  }

  fetchAppUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  setRecipes = (recipes, recipesTitle) => {
    this.setState({ ...this.state, recipes, recipesTitle });
  };

  render() {
    return (
      <div className="App">
        <Userbar
          className="navbar"
          fetchAppUser={this.fetchAppUser}
        />
        <Navbar user={this.state.user} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Search setRecipes={this.setRecipes} />}
          />
          <Route
            exact
            path="/recipes"
            render={() => (
              <Recipes
                recipesTitle={this.state.recipesTitle}
                recipes={this.state.recipes.data}
              />
            )}
          />
          <Route
            exact
            path="/advancedSearch"
            render={() => {
              return <AdvancedSearch setRecipes={this.setRecipes} />;
            }}
          />
          <Route exact path="/converter" render={() => <Converter />} />
          <Route exact path="/menu" render={() => <Menu />} />
          <Route exact path="/editUser" render={() => <EditUser />} />
        </Switch>
      </div>
    );
  }
}

export default App;
