import React, { Component } from "react";

import HealthLabels from "../healthLabels";
import MenuSave from "./menuSave";
import "./Menu.css";
import { css } from "react-emotion";
import { PulseLoader } from "react-spinners";

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
      name: Date.now(),
      //API
      days: 5,
      ingredientsSelected: [],  //ingredientForm component
      healthLabels: [], //labelInitUser // Por defecto lo del user
      menuSave: false
    };
    this.edamamService = new EdamamService();
  }

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
    


  //API

  loadingChange = () => {
    this.setState({
      ...this.state,
      loading: true
    });
  };

  handleFormMealSubmit = e => {
    e.preventDefault();

    let { days, healthLabels } = this.state;
    this.loadingChange()
    this.edamamService
      .menuLunchSearch({ days, healthLabels })
      .then(recipesLunch => {
        let recipes = recipesLunch.data.map(recipe => {
          console.log(recipe)
          delete recipe.recipe['totalNutrients']
          return ({...recipe})
        })
        console.log(recipesLunch, "recipes for LUNCH");
        this.setState({
          ...this.state,
          recipesLunch: recipes
        });
        this.edamamService
          .menuDinnerSearch({ days, healthLabels })
          .then(recipesDinner => {
            let recipes = recipesDinner.data.map(recipe => {
              console.log(recipe)
              delete recipe.recipe['totalNutrients']
              return ({...recipe})
            })
            this.setState({
              ...this.state,
              recipesDinner: recipes,
              menuSave: true,
              loading: false
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
        userId={this.props.user._id}
        recipesLunch={this.state.recipesLunch}
        recipesDinner={this.state.recipesDinner}
      />
    ) : (
      ""
    );

    let search = "Search yours recipes!";

    if(this.state.loading){
        search = (   <PulseLoader
          className={override}
          sizeUnit={"px"}
          size={10}
          color={"#dbdbdb"}
          loading={this.state.loading}
        />)
      }

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
            <button
              type="submit"
              value="Search yours menu!!"
              id="submit-menu"
            >{search}</button>
          </div> 
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
