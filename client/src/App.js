import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthService from "./services/AuthService.js";
import "./App.css";


import Recipes from "./components/recipes";
import Search from "./components/search";
import AdvancedSearch from "./components/advancedSearch";
import Navbar from "./components/navbar";
import Userbar from "./components/userbar";
import Login from "./components/login";
import Signup from "./components/signup";
import Menu from "./components/menu";
import EditUser from "./components/editUser";
import Converter from "./components/converter"

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      recipes: null,
      search: "",
      redirectToRecipes: false,
      redirectToHome: false,
      ingredientsSelected: [],
      healthLabels: []
      //advancedSearch: []
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

  //PARA ACTUALIZAR RECIPES Y PODER REDIRIGIRLA DESDE
  //CUALQUIER RUTA
  setRecipes = recipes => {
    this.setState({
      ...this.state,
      recipes: recipes,
      //         redirectToRecipes: true
    });
  }
  // handleFormAdvancedSubmit = e => {
  //   e.preventDefault();

  //   console.log('Pasa por handleFormAdvSubm en App')
  //   console.log(this.state)

  //   let { ingredientsSelected, healthLabels } = this.state;

  //   if (
  //     Object.values({ ingredientsSelected, healthLabels }).every(
  //       element => !element.length
  //     )
  //   ) {
  //     console.log("No pudesn estar todos vacios!!!!!!!!!!!!!");
  //     return;
  //   }

  //   this.edamamService
  //     .advancedSearch({ ingredientsSelected, healthLabels })
  //     .then(recipes => {
  //       console.log('Respuesta en front')
  //       console.log(recipes)

  //       this.setState({
  //         ...this.state,
  //         recipes: recipes.data,
  //         redirectToRecipes: true
  //       });

  //     });
  // };


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
                // handleFormSubmit={this.handleFormSubmit}
                // handleChange={this.handleChange}
                // redirectToRecipes={this.state.redirectToRecipes}
              />
            )}
          />
          <Route
            exact
            path="/recipes"
            render={() => (
              <Recipes
                search={this.state.search}
                recipes={this.state.recipes.data}
              />
            )}
          />

          <Route
            exact
            path="/advancedSearch"
            render={() => {
              console.log(this.state.recipes, 'Recetas en APP')
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
              )
            }}
          />
          {/* <Route exact path="/menu" render={() => <Menu user={this.state.user}/>} /> */}
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getUser} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login getUser={this.getUser} />}
          />

          <Route
            exact
            path="/editUser"
            render={() => (<EditUser user={this.state.user} getUser={this.getUser} />)}
          />
          <Route exact path="/menu" render={() => <Menu user={this.state.user} />} />
          <Route exact path="/converter" render={() => <Converter />} />
        </Switch>
      </div>
    );
  }
}

export default App;
