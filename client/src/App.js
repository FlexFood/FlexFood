import React, { Component } from "react";
import AuthService from "./services/AuthService.js";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import EdamamService from "./services/EdamamService";
import Recipes from "./components/recipes";
import Search from "./components/search";
import AdvancedSearch from "./components/advancedSearch";
import Navbar from "./components/navbar";
import Userbar from "./components/userbar";
import Login from "./components/login";
import Signup from "./components/signup";
import Meal from "./components/meal";
import EditUser from "./components/editUser";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      recipes: null,
      search: "",
      redirectToRecipes: false,
      ingredientsSelected: [],
      healthLabels: []
      //advancedSearch: []
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

    this.edamamService.getByLabel(search).then(recipes => {
      this.setState({
        ...this.state,
        recipes: recipes.data,
        redirectToRecipes: true
      });
    });
  };




  //PARA SETEAR LOS FILTROS
  // setAdvancedSearch = state => {
  //   console.log(state, 'Intentando pasar ingrs and healt to App')
  //   // const { ingredientsSelected, healthLabels } = e.target;
  //   // this.setState({ ...this.state,  ingredientsSelected, healthLabels});
  // }
  addIngredient = event => {
    let ingredientsSelected = this.state.ingredientsSelected;

    //La idea es que solo pushee si no hay otro igual en seleccionados
    if (
      !this.state.ingredientsSelected.find(ingredient => ingredient === event)
    )
      ingredientsSelected.push(event);
    //QUE ACTUALICE EN APP
    this.setState({
      ingredientsSelected
    });
  };


  handleChangeChecked = e => {
    const { name, value } = e.target;
    let array = [...this.state[name]];

    if (e.target.checked) {
      array.push(value);
      this.setState({ ...this.state, [name]: array });
    } else {
      array.splice(array.indexOf(value), 1);
      this.setState({ ...this.state, [name]: array });
    }
  };

  deleteIngredient = event => {
    console.log(event, this.state.ingredientsSelected);
    var ingredientsSelected = this.state.ingredientsSelected;
    ingredientsSelected.splice(ingredientsSelected.indexOf(event), 1);

    //QUE ACTUALICE EN APP

    this.setState({
      ingredientsSelected
    });
  };

  // handleFormSubmit = e => {
  //   e.preventDefault();

  //   const search = this.state.search;

  //   this.edamamService.getByLabel(search).then(recipes => {
  //     this.setState({
  //       ...this.state,
  //       recipes: recipes.data,
  //       redirectToRecipes: true
  //     });
  //   });
  // };

  handleFormAdvancedSubmit = e => {
    e.preventDefault();

    let { ingredientsSelected, healthLabels } = this.state;

    if (
      Object.values({ ingredientsSelected, healthLabels }).every(
        element => !element.length
      )
    ) {
      console.log("No pudesn estar todos vacios!!!!!!!!!!!!!");
      //SACAR MENSAJE Y REDIRIGIR A LA MISMA URL
      return;
    }

    this.edamamService
      .advancedSearch({ ingredientsSelected, healthLabels })
      .then(recipes => {
        console.log('Respuesta en front')
        console.log(recipes)

        this.setState({
          ...this.state,
          recipes: recipes.data,
          redirectToRecipes: true
        });


      });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ ...this.state, search: value });
  };


  render() {

    if(this.state.redirectToRecipes) {
      console.log('Pasaaaa')
      return <Redirect to="/recipes" />
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
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
                redirectToRecipes={this.state.redirectToRecipes}
              />
            )}
          />
          <Route
            path="/recipes"
            render={() => (
              <Recipes
                search={this.state.search}
                recipes={this.state.recipes}
              />
            )}
          />
          <Route
            exact
            path="/advancedSearch"
            render={() => (
              <AdvancedSearch
                handleFormAdvancedSubmit={this.handleFormAdvancedSubmit}
                ingredientsSelected={this.state.ingredientsSelected}
                deleteIngredient={this.deleteIngredient}
                handleChangeChecked={this.handleChangeChecked}
                addIngredient={this.addIngredient}
                user={this.state.user}
                recipes={this.state.recipes}
              />
            )}
          />
          <Route exact path="/meal" render={() => <Meal />} />
          <Route
            path="/signup"
            render={() => <Signup getUser={this.getUser} />}
          />
          <Route
            path="/login"
            render={() => <Login getUser={this.getUser} />}
          />

          <Route
            path="/editUser"
            render={() => (

              <EditUser
                user={this.state.user}
                getUser={this.getUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
