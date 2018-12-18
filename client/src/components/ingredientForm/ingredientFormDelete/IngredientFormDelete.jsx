import React, { Component } from "react";
import IngredientBoxDelete from "./ingredientBoxDelete";
import "./IngredientFormDelete.css";

export default class IngredientFormDelete extends Component {

  render() {
    console.log(this.props, "Props en deleeeeeeteeeeeee");
    var ingredientsSelected = this.props.ingredientsSelected;
    var title = ingredientsSelected.length > 0 ? (
      <h2>Selected ingredients:</h2>
      ) : (
        <h2>There are no selected ingredients</h2>
    );

    console.log(
      ingredientsSelected,
      "props-----ingredientsSelected en deleteForm"
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
                <IngredientBoxDelete
                  ing={ingredient}
                  key={index}
                  deleteIngredientSelected={this.props.deleteIngredientSelected}
                />
              );
            })}
        </form>
      </div>
    );
  }
}
