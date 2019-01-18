import React, { Component } from "react";
import HealthLabels from "../healthLabels";
import SaveMenu from "./saveMenu";
import "./Menu.css";
import { css } from "react-emotion";
import { PulseLoader } from "react-spinners";
import AuthService from "../../services/AuthService";
import EdamamService from "../../services/EdamamService";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      name: new Date().toLocaleDateString(),
      days: 5,
      showSaveMenu: false,
      showSaveButton: true
    };
    this.edamamService = new EdamamService();
    this.authService = new AuthService();
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

  handleChangeName = e => {
    const { value } = e.target;
    this.setState({ ...this.state, name: value });
  };

  handleChangeDays = e => {
    const { value } = e.target;
    this.setState({ ...this.state, days: value });
  };

  handleFormMealSubmit = e => {
    e.preventDefault();
    let searchConditions = {
      days: this.state.days,
      healthLabels: this.healthLabels
    };
    this.loadingChange();
    this.edamamService.menuLunchSearch(searchConditions).then(recipesLunch => {
      let recipes = recipesLunch.data.map(recipe => {
        delete recipe.recipe["totalNutrients"];
        return { ...recipe };
      });
      this.setState({ ...this.state, recipesLunch: recipes });
      this.edamamService
        .menuDinnerSearch(searchConditions)
        .then(recipesDinner => {
          let recipes = recipesDinner.data.map(recipe => {
            delete recipe.recipe["totalNutrients"];
            return { ...recipe };
          });
          this.setState({
            ...this.state,
            recipesDinner: recipes,
            showSaveMenu: true,
            loading: false
          });
        });
    });
  };

  loadingChange = () => {
    this.setState({
      ...this.state,
      loading: true
    });
  };

  render() {
    var SaveMenuComponent = this.state.showSaveMenu ? (
      <SaveMenu
      days={this.state.days}
      name={this.state.name}
      userId={this.state.user._id}
      recipesLunch={this.state.recipesLunch}
      recipesDinner={this.state.recipesDinner}
      showSaveButton={this.state.showSaveButton}
      />
    ) : (
      ""
    );

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
      <div id="menu">
        <form id="form-menu" onSubmit={this.handleFormMealSubmit}>
          <div className="container-menu">
            <div className="aux-menu-container">
              <h2>Menu: {this.state.name}</h2>
              <hr className="line" />
              <label className="labels-menu">Menu's name</label>
              <input
                id="name-menu"
                placeholder="
              Rename your menu..."
                type="text"
                onChange={e => this.handleChangeName(e)}
              />
              <label className="labels-menu">Number of days</label>
              <select id="days-menu" onChange={e => this.handleChangeDays(e)}>
                <option type="text" value="">
                  How many days?
                </option>
                <option type="number" value="1">
                  1
                </option>
                <option type="number" value="2">
                  2
                </option>
                <option type="number" value="3">
                  3
                </option>
                <option type="number" value="4">
                  4
                </option>
                <option type="number" value="5">
                  5
                </option>
                <option type="number" value="6">
                  6
                </option>
                <option type="number" value="7">
                  7
                </option>
              </select>
            </div>
            <button type="submit" value="Search yours menu!!" id="submit-menu">
              {search}
            </button>
          </div>
          <div className="container-menu">
            <HealthLabels
              getHealthLabels={this.getHealthLabels}
              user={this.state.user}
            />
          </div>
        </form>
        {SaveMenuComponent}
      </div>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
