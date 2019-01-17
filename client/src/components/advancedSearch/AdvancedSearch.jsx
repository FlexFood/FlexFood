import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./AdvancedSearch.css";
import EdamamService from "../../services/EdamamService";
import AuthService from "../../services/AuthService";
import HealthLabels from "../healthLabels";
import AddIngredient from "../ingredientForm/addIngredient";
import ListOfIngredients from "../ingredientForm/listOfIngredients";
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
        ingredient => ingredient.name === ingredientToAdd.name
      )
    ) {
      ingredientsSelected.push(ingredientToAdd);
      this.setState({ ...this.state, ingredientsSelected });
    }
  };

  deleteIngredient = e => {
    var ingredientsSelected = this.state.ingredientsSelected;
    ingredientsSelected.splice(ingredientsSelected.indexOf(e), 1);
    this.setState({ ingredientsSelected });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let searchConditions = {
      ingredientsSelected: this.state.ingredientsSelected.map(ingredient => {
        return ingredient.name;
      }),
      healthLabels: this.healthLabels
    };
    if (Object.values( searchConditions ).every(element => !element.length)) {
        return;
    }
    this.loadingChange();
    this.edamamService.advancedSearch( searchConditions )
    .then(recipes => {
      this.props.setRecipes(recipes);
      this.setState({ ...this.state, redirectToRecipes: true });
    });
  };

  loadingChange = () => {
    this.setState({
      ...this.state,
      loading: true
    });
  };

  render() {
    if (this.state.redirectToRecipes) {
      return <Redirect to="/recipes" />;
    }

    let buttonMessage = "Search yours recipes!";
    if (this.state.loading) {
        buttonMessage = (
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
            <ListOfIngredients
              deleteIngredient={this.deleteIngredient}
              ingredientsSelected={this.state.ingredientsSelected}
            />
            <button type="submit" id="submit-advanced">
              {buttonMessage}
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
