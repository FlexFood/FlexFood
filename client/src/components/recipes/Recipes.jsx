import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      listOfRecipes: null
    };
  }

  render() {
 
    return (
      <div>
        <h1>Recetas de {this.props.search}</h1>

        {this.props.recipes &&
          this.props.recipes.map((recipe, i) => {
            return (
              <div className="card" key={i}>
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
      </div>
    );
  }
}
