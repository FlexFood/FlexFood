import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Recipe.css";


export default class Recipe extends Component {
  scrollToRecipe = () => {
    window.scrollBy({
      top: document.querySelector("body").clientHeight, // could be negative value
      left: 0,
      behavior: "smooth"
    });
  };

  componentDidMount(){
    this.scrollToRecipe()
  }
  render() {
    return (
      <div id="recipe">
        <div id="left-container">
          <img
            src={this.props.recipe.recipe.image}
            alt={this.props.recipe.recipe.label}
          />
          <Link 
            id="howtodo"
            to={this.props.recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            How to make
          </Link>
          <hr />
          <ul>
            {this.props.recipe.recipe.healthLabels.map((healthLabel, i) => {
              return <li key={i}>{healthLabel}</li>;
            })}
          </ul>
        </div>

        <div id="ingrdient-table">
          <h1>{this.props.recipe.recipe.label}</h1>
          <hr />
          <p>
            Yield: <b>{this.props.recipe.recipe.yield}</b>
          </p>
          <hr />
          <table>
            <thead>
              <tr>
                <td className="qty-column">
                  <b>QTY</b>
                </td>
                <td>
                  <b>Ingredient</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {this.props.recipe.recipe.ingredients.map((ingredient, i) => {
                return (
                  <tr key={i}>
                    <td className="qty-column">
                      {ingredient.weight.toFixed(1)}gr.
                    </td>
                    <td>{ingredient.text}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div />
      </div>
    );
  }
}
