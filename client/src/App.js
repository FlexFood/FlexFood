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
      //APIS Q YA NO HAGO AQUI PROBAR A BORRRRRAR
      ingredientsSelected: [],
      healthLabels: [],
      //REDUX- USER componente independiente
      //NO haría aquí la llamada a authService 
      user: null,
      //REDUX- RECIPES componente independiente
      recipes: null,
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

      //         redirectToRecipes: true
    });
  };

  logout = () => {
    this.authService
      .logout()
      .then(() =>
        this.setState({ ...this.state, user: null, redirectToHome: true })
      );
  };

  //ACTUALIZACIONES EDIT USER
  handleFormHealthLabelsSubmit = (e,healthLabels) => {
    e.preventDefault();
    console.log('SUBMIT DEL EDITUSER', healthLabels)
    //const { healthLabels, dietLabels } = this.state;
    //this.setAppUserLabels(healthLabels);
    let dietLabels = [];
    this.authService.edit({ healthLabels, dietLabels })
    .then(user => {
      this.setState({ ...this.state, user }, () =>
        console.log("estado", this.state, "user", user)
      );
    });
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
              //console.log(this.state.recipes, "Recetas en APP");
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
