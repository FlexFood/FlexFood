import React, { Component } from 'react'
import ingredients from '../ingredients.json';

import IngredientBoxDelete from './ingredientBoxDelete';

export default class ingredientFormDelete extends Component {
  render() {
    console.log(this.props, 'Props en deleeeeeeteeeeeee')
    var ingredientsSelected = this.props.name;
    console.log(ingredientsSelected, 'ingredientsSelected en deleteForm')
    return (
      <div className="ingredient-form-delete">
        <h2>Ingredients for use</h2>
        <form id="advancedSearchForm" onSubmit={this.props.handleFormAdvancedSubmit}>
          {(ingredientsSelected
            && ingredientsSelected.map((ingredient, index) => {
              return (
                <IngredientBoxDelete
                  ing={ingredient}
                  key={index}
                  deleteIngredientSelected={this.props.deleteIngredientSelected} />
              )
            }))}
        </form>
      </div>

    )
  }
}
