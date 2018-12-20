import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./Recipes.css";

import Recipe from "./recipe";

export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipesTitle: "PRO",
      recipe: null,
      showRecipe: false
    };
  }

  handleRecipeSelect = i => {
    this.setState({
      ...this.state,
      showRecipe: true,
      recipe: this.props.recipes[i]
    });
  };
  componentWillMount(){
    //console.log(this.props.search,"LAS PROPS Q LLEGAN RECIPES")
    if (this.props.recipesTitle)
    this.setState({
      ...this.state,
      recipesTitle: this.props.recipesTitle
    });
  }

  render() {
    
    console.log(this.props.recipes, 'Recetas en PROPS de RECIPES')
    var recipe = this.state.showRecipe ? (
      <Recipe recipe={this.state.recipe} />
    ) : (
        ""
      );

    return (
      <div id="recipes">
        <h1>
          Recipes <span>{this.state.recipesTitle}</span>
        </h1>
        <div id="recipes-container">
          {this.props.recipes &&
            this.props.recipes.map((recipe, i) => {
              return (
                <div
                  to="#recipe"
                  id="recipes-card"
                  key={i}
                  onClick={() => this.handleRecipeSelect(i)}
                >
                  <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                  <div id="card-text">
                    <h3>{recipe.recipe.label}</h3>
                    <hr />
                    <p>Yield: {recipe.recipe.yield}</p>
                    {/* <ul>
                      {recipe.recipe.healthLabels.map((ingredient, i) => {
                        return <li key={i}>{ingredient}</li>;
                      })}
                    </ul> */}
                  </div>
                </div>
              );
            })}
        </div>
        {recipe}
      </div>
    );
  }
}
