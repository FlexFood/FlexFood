import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Recipe from "../recipe";

export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipe: null,
      showRecipe: false
    };
  }

  handleRecipeSelect = i => {
    console.log(i);
    this.setState({
      ...this.state,
      showRecipe: true,
      recipe: this.props.recipes[i]
    });
  };

  render() {
    var recipe = this.state.showRecipe ? (
      <Recipe recipe={this.state.recipe} />
      ) : (
        ""
      );

    return (
      <div>
        <h1>Recetas de {this.props.search}</h1>

        {this.props.recipes &&
          this.props.recipes.map((recipe, i) => {
            return (
              <div
                className="card"
                key={i}
                onClick={() => this.handleRecipeSelect(i)}
              >
                <p>{recipe.recipe.label}</p>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <div className="card-text">
                  <h3>
                    <Link to="/">{recipe.recipe.label}</Link>
                  </h3>
                  <p>Personas: {recipe.recipe.yield}</p>
                  <p>Ingredientes:</p>
                  <ul>
                    {recipe.recipe.ingredientLines.map((ingredient, i) => {
                      return <li key={i}>{ingredient}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        {recipe}
      </div>
    );
  }
}
