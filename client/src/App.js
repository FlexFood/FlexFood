import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./App.css";
import AuthService from "./services/AuthService.js";
import Userbar from "./components/userbar";
import EditUser from "./components/editUser";
import Navbar from "./components/navbar";
import AdvancedSearch from "./components/advancedSearch";
import Converter from "./components/converter"
import Menu from "./components/menu";
import Search from "./components/search";
import Recipes from "./components/recipes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      redirectToHome: false,
      redirectToRecipes: false,
    };
    this.authService = new AuthService();
    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  setUser = user => {
    this.setState({ ...this.state, user });
  };

  setRecipes = (recipes, recipesTitle) => {
    this.setState({
      ...this.state,
      recipes,
      recipesTitle
    });
  };

  logout = () => {
    this.authService
      .logout()
      .then(() =>
        this.setState({ ...this.state, user: null, redirectToHome: true })
      );
  };

  render() {
    return (
      <div className="App">
        <Userbar
          className="navbar"
          user={this.state.user}
          logout={this.logout}
          setUser={this.setUser}
        />
        <Navbar user={this.state.user} />
        <Switch>
          <Route exact path="/"
            render={() => (
              <Search setRecipes={this.setRecipes} />)}
          />
          <Route exact path="/recipes"
            render={() => (
              <ReactCSSTransitionGroup
                transitionName="css-transition"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={300}
              >
                <Recipes
                  className="recipes-css-transition"
                  recipesTitle={this.state.recipesTitle}
                  recipes={this.state.recipes.data}
                />
              </ReactCSSTransitionGroup>
            )}
          />
          <Route exact path="/advancedSearch"
            render={() => {
              return (
                <AdvancedSearch
                  user={this.state.user}
                  setRecipes={this.setRecipes}
                />
              );
            }}
          />
          <Route exact path="/converter"
            render={() => <Converter />} />
          <Route exact path="/menu"
            render={() => <Menu user={this.state.user} />}
          />
          <Route exact path="/editUser"
            render={() => (
              <EditUser
                handleFormHealthLabelsSubmit={this.handleFormHealthLabelsSubmit}
                />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
