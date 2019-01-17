import React, { Component } from "react";
import "./ListOfIngredients.css";

export default class IngredientFormDelete extends Component {
  render() {
    var ingredientsSelected = this.props.ingredientsSelected;
    var title =
      ingredientsSelected.length > 0 ? (
        <h2>Selected ingredients:</h2>
      ) : (
        <h2>There are no selected ingredients</h2>
      );
    return (
      <div className="ingredient-form-delete">
        {title}
        <hr className="line" />
        <form
          id="advancedSearchForm"
          onSubmit={this.props.handleFormAdvancedSubmit}
        >
          {ingredientsSelected &&
            ingredientsSelected.map((ingredient, index) => {
              return (
                <div className="ingredient" id="delete-ingredient" key={index}>
                  <div id="aux-delete">
                    <p>{ingredient.name}</p>
                    <p>{ingredient.image}</p>

                  </div>
                  <button
                    className="rubis-btn"
                    onClick={e => {
                      e.preventDefault();
                      this.props.deleteIngredient(ingredient);
                    }}
                  >
                    🗑
                  </button>
                </div>
              );
            })}
        </form>
      </div>
    );
  }
}
