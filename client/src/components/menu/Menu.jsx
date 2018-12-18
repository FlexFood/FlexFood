import React, { Component } from "react";

//import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";
//import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";
import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import HealthLabels from "../healthLabels";
import MenuSave from "./menuSave";
import "./Menu.css";

import EdamamService from "../../services/EdamamService";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      name: Date.now(),
      //API
      days: 5,
      ingredientsSelected: [],  //ingredientForm component
      healthLabels: [], //labelInitUser // Por defecto lo del user
      menuSave: false
    };
    this.edamamService = new EdamamService();
  }

  componentDidMount() {
    this.userDefault();
  }

  userDefault = healthLabels => {
    healthLabels = this.props.user.healthLabels;
    this.setState({
      healthLabels
    });
  };

  //LÓGICA DE --HEALTHLABEL--
  //Cambiar por el ternario de Search

  handleChange = e => {
    let inputLabel = e.target.value;
    let healthLabels = this.state.healthLabels;

    if (!healthLabels.some(label => label === inputLabel)) {
      console.log("No hay etiqueta, la añado");
      healthLabels.push(inputLabel);
    } else {
      console.log("Hay etiqueta, la quito");
      healthLabels.splice(healthLabels.indexOf(inputLabel), 1);
    }
    this.setState({ ...this.state, healthLabels });
  };


  //LÓGICA DEL --INGRSIENT-SELECTED--

  addIngredientSelected = inputLabel => {
    let ingredientsSelected = this.state.ingredientsSelected;
    if (!this.state.ingredientsSelected
        .find(ingredient => ingredient === inputLabel))
        ingredientsSelected.push(inputLabel);
    this.setState({
        ingredientsSelected
    });
};

deleteIngredientSelected = event => {
    var ingredientsSelected = this.state.ingredientsSelected;
    ingredientsSelected.splice(ingredientsSelected.indexOf(event), 1);
    this.setState({
        ingredientsSelected
    });
};


  //API

  handleFormMealSubmit = e => {
    e.preventDefault();

    let { days, healthLabels } = this.state;

    this.edamamService
      .menuLunchSearch({ days, healthLabels })
      .then(recipesLunch => {
        console.log(recipesLunch, "recipes for LUNCH");
        this.setState({
          ...this.state,
          recipesLunch: recipesLunch.data
        });
        this.edamamService
          .menuDinnerSearch({ days, healthLabels })
          .then(recipesDinner => {
            console.log(recipesDinner, "recipes for DINNER");
            this.setState({
              ...this.state,
              recipesDinner: recipesDinner.data,
              menuSave: true
            });
          });
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

  render() {
    var menuSave = this.state.menuSave ? (
      <MenuSave
        healthLabels={this.state.healthLabels}
        days={this.state.days}
        name={this.state.name}
        userID={this.props.user._id}
        recipesLunch={this.state.recipesLunch}
        recipesDinner={this.state.recipesDinner}
      />
    ) : (
      ""
    );

    return (
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
              <select
                id="days-menu"
                // placeholder="Menu's days [1-7]"
                onChange={e => this.handleChangeDays(e)}
              >
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
            <input
              type="submit"
              value="Search yours menu!!"
              id="submit-menu"
            />
            {/* <p>CaloriesForLunch</p> 
            <div className="row">
              <input type="range" min="0" max="10000" />
              <input type="range" min="0" max="10000" />
            </div>
            <p>CaloriesForDinner</p> 
            <div className="row">
              <input type="range" min="0" max="10000" />
              <input type="range" min="0" max="10000" />
            </div>
            <p>Time</p> 
            <div className="row">
              <input type="range" min="0" max="10000" />
              <input type="range" min="0" max="10000" />
            </div>*/}
          </div> 
          {/* <div>
            <h3>NOT included</h3>
              <IngredientFormAdd addIngredientSelected={this.addIngredientSelected} />
              <IngredientFormDelete
                        deleteIngredientSelected={this.deleteIngredientSelected}
                        ingredientsSelected={this.state.ingredientsSelected}
                    />
          </div> */}
          <div className="container-menu">
            <HealthLabels
              handleChange={this.handleChange}
              user={this.props.user}
            />
            {/* <IngredientFormAdd addIngredientSelected={this.addIngredientSelected} />
            <IngredientFormDelete delteIngredientSelected={this.deleteIngredientSelected} /> */}
          </div>
        </form>
        {menuSave}
      </div>
    );
  }
}
