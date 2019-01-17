import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./AdvancedSearch.css";
import EdamamService from "../../services/EdamamService";
import AuthService from "../../services/AuthService";
import HealthLabels from "../healthLabels";
import AddIngredient from "../ingredientForm/addIngredient";
import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import { css } from "react-emotion";
import { PulseLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class AdvancedSearch extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsSelected: [],
      value: { min: 2, max: 10 },
      redirectToRecipes: false
    };
    this.authService = new AuthService();
    this.edamamService = new EdamamService();
    this.fetchUser();

    this.healthLabels = [];
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getHealthLabels = obj => {
    this.healthLabels = [];
    Object.entries(obj).map(label => {
      if (label[1] === true) {
        this.healthLabels.push(label[0]);
      }
    });
  };

  addIngredient = ingredientToAdd => {
    let ingredientsSelected = this.state.ingredientsSelected;
    if (
      !this.state.ingredientsSelected.find(
        ingredient => ingredient === ingredientToAdd.name
      )
    ) {
      ingredientsSelected.push(ingredientToAdd.name);
      this.setState({ ...this.state, ingredientsSelected });
    }
  };

  deleteIngredientSelected = event => {
    var ingredientsSelected = this.state.ingredientsSelected;
    ingredientsSelected.splice(ingredientsSelected.indexOf(event), 1);
    this.setState({
      ingredientsSelected
    });
  };

  loadingChange = () => {
    this.setState({
      ...this.state,
      loading: true
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("Pasa por handleFormAdvSubm en App");
    console.log(this.state);

    let { ingredientsSelected, healthLabels } = this.state;

    if (
      Object.values({ ingredientsSelected, healthLabels }).every(
        element => !element.length
      )
    ) {
      console.log("No pudesn estar todos vacios!!!!!!!!!!!!!");
      return;
    }
    this.loadingChange();
    this.edamamService
      .advancedSearch({ ingredientsSelected, healthLabels: this.healthLabels })
      .then(recipes => {
        console.log("Respuesta en front");
        console.log(recipes);

        this.props.setRecipes(recipes);
        this.setState({
          ...this.state,
          recipes: recipes.data,
          redirectToRecipes: true
        });
      });
  };

  render() {
    if (this.state.redirectToRecipes) {
      return <Redirect to="/recipes" />;
    }

    let search = "Search yours recipes!";

    if (this.state.loading) {
      search = (
        <PulseLoader
          className={override}
          sizeUnit={"px"}
          size={10}
          color={"#dbdbdb"}
          loading={this.state.loading}
        />
      );
    }

    return this.state.user ? (
      <form id="advancedSearch" onSubmit={this.handleFormSubmit}>
        <div id="advenced-search-container">
          <section className="advanced-search-box">
            <AddIngredient addIngredient={this.addIngredient} />
          </section>
          <section className="advanced-search-box" id="box-submit">
            <IngredientFormDelete
              deleteIngredientSelected={this.deleteIngredientSelected}
              ingredientsSelected={this.state.ingredientsSelected}
            />
            <button type="submit" id="submit-advanced">
              {search}
            </button>
          </section>
          <section className="advanced-search-box">
            <HealthLabels
              getHealthLabels={this.getHealthLabels}
              user={this.state.user}
            />
          </section>
        </div>
      </form>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
