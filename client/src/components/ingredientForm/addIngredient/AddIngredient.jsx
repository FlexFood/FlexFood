import React, { Component } from "react";
import allPossibleIngredients from "../ingredients.json";
import "./AddIngredient.css";

export default class AddIngredient extends Component {
  constructor() {
    super();
    this.state = {
      allPossibleIngredients
    };
  }

  ingredientFinder = e => {
    let listOfIngredients = this.state.allPossibleIngredients.filter(
      ingredient => {
        if (e.target.value === "") return null;
        return ingredient.name.indexOf(e.target.value.toLowerCase()) === 0;
      }
    );
    this.setState({ ...this.state, listOfIngredients });
  };

  render() {
    return (
      <div className="ingredient-form-add">
        <h2>Add your ingredients...</h2>
        <hr className="line" />
        <form autocomplete="off">
          <input
            id="advancedSearch-input"
            type="text"
            placeholder="Search..."
            onChange={this.ingredientFinder}
          />
        </form>
        {this.state.listOfIngredients &&
          this.state.listOfIngredients.map((ingredient, index) => {
            return (
              <button
                key={index}
                className="ingredient"
                onClick={e => {
                  e.preventDefault();
                  this.props.addIngredient(ingredient);
                }}
              >
                <p>{ingredient.image}</p>
                <p className="divisor">|</p>
                <p>{ingredient.name}</p>
              </button>
            );
          })}
      </div>
    );
  }
}
