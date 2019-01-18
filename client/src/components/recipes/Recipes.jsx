import React, { Component } from "react";
import "./Recipes.css";

import Recipe from "./recipe";

export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipesTitle: "PRO Finder",
      showRecipe: false
    };
  }

  setRecipesTitle = () => {
    if (this.props.recipesTitle)
      this.setState({
        ...this.state,
        recipesTitle: this.props.recipesTitle
      });
  };

  componentWillMount() {
    this.setRecipesTitle();
  }

  handleRecipeSelect = i => {
    this.scrollToRecipe();
    this.setState({
      ...this.state,
      showRecipe: true,
      recipe: this.props.recipes[i]
    });
  };
  
  scrollToRecipe = () => {
    window.scrollBy({
      top: document.querySelector("body").clientHeight,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    var recipeComponent = this.state.showRecipe ? (
      <Recipe recipe={this.state.recipe} scrollToRecipe={this.scrollToRecipe} />
    ) : (
      ""
    );

    return (
      <div id="recipes">
        <h1>
          Recipes: <span>{this.state.recipesTitle}</span>
        </h1>
        <div id="recipes-container">
          {this.props.recipes &&
            this.props.recipes.map((recipe, i) => {
              let time = `${recipe.recipe.totalTime} min`;
              if (recipe.recipe.totalTime === 0) time = "Not available";

              return (
                <div
                  to="#recipe"
                  id="recipes-card"
                  key={i}
                  onClick={() => {
                    this.handleRecipeSelect(i);
                    this.scrollToRecipe();
                  }}
                >
                  <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                  <div id="card-text">
                    <h3>{recipe.recipe.label}</h3>
                    <hr />
                    <p>Yield: {recipe.recipe.yield}</p>
                    <p>
                      Calories:{" "}
                      {(recipe.recipe.calories / recipe.recipe.yield).toFixed(
                        0
                      )}
                    </p>
                    <p>Time: {time}</p>
                  </div>
                </div>
              );
            })}
        </div>
        {recipeComponent}
      </div>
    );
  }
}
