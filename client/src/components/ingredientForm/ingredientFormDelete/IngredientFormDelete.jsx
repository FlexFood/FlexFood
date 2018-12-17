import React, { Component } from 'react'
//import ingredients from '../ingredients.json';

import IngredientBoxDelete from './ingredientBoxDelete';

export default class IngredientFormDelete extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     ingredients,
  //     searchArray: null,
  //     search: ""
  //   }
  // }
  render() {
    console.log(this.props, 'Props en deleeeeeeteeeeeee')
    var ingredientsSelected = this.props.ingredientsSelected;
    var title = this.props.ingredientsSelected
    ? (<h3>No hay ingredientes Seleccionados</h3>)
    : (<h3>Ingredientes Seleccionados</h3>)

    console.log(ingredientsSelected, 'props-----ingredientsSelected en deleteForm')
    return (
      <div className="ingredient-form-delete">
      {title}
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
