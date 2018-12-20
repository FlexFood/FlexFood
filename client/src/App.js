import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./App.css";

//USER
import AuthService from "./services/AuthService.js";


import Userbar from "./components/userbar";
import EditUser from "./components/editUser";
import Signup from "./components/signup";
import Login from "./components/login";
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

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  logout = () => {
    this.authService
      .logout()
      .then(() =>
        this.setState({ ...this.state, user: null, redirectToHome: true })
      );
  };

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  //PARA ACTUALIZAR RECIPES Y PODER REDIRIGIRLA DESDE
  //CUALQUIER RUTA
  setRecipes = (recipes, recipesTitle) => {
    this.setState({
      ...this.state,
      recipes,
      recipesTitle

      //         redirectToRecipes: true
    });
  };

  render() {
    if (this.state && this.state.redirectToHome) {
      return <Redirect exact to="/" />;
    }

    return (
      <div className="App">
        <Userbar
          className="navbar"
          user={this.state.user}
          logout={this.logout}
          getUser={this.getUser}
        />
        <Navbar user={this.state.user} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Search
                setRecipes={this.setRecipes}
              />
            )}
          />
          <Route
            exact
            path="/recipes"
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

          <Route
            exact
            path="/advancedSearch"
            render={() => {
              console.log(this.state.recipes, "Recetas en APP");
              return (
                <AdvancedSearch
                  //handleFormAdvancedSubmit={this.handleFormAdvancedSubmit}
                  //ingredientsSelected={this.state.ingredientsSelected}
                  //deleteIngredient={this.deleteIngredient}
                  //handleChangeChecked={this.handleChangeChecked}
                  //addIngredient={this.addIngredient}
                  user={this.state.user}
                  setRecipes={this.setRecipes}
                  //recipes={this.state.recipes}
                  // redirectToRecipes={this.state.redirectToRecipes}
                />
              );
            }}
          />
          {/* <Route exact path="/menu" render={() => <Menu user={this.state.user}/>} /> */}
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getUser} />}
          />
          
          {/* <Route
            exact
            path="/login"
            render={() => <Login getUser={this.getUser} />}
          /> */}

          <Route
            exact
            path="/editUser"
            render={() => (
              <EditUser user={this.state.user} getUser={this.getUser} />
            )}
          />
          <Route
            exact
            path="/menu"
            render={() => <Menu user={this.state.user} />}
          />
          <Route exact path="/converter" render={() => <Converter />} />
        </Switch>
      </div>
    );
  }
}

export default App;
