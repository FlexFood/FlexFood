import React, { Component } from 'react'
import IngredientBoxDelete from "../ingredientBox/ingredientBoxDelete";

export default class AdvancedSearchForm extends Component {
  render() {
    console.log('Estoy en Form y me llega la fn deleteIngredient')
    console.log(this.props)
    var ingredientsSelected = this.props.ingredientsSelected;
    return (
      <form onSubmit={this.props.handleFormAdvancedSubmit}>
        <p>Componente dietLabesl</p>
        <p>Componente healthLabesl</p>
        {(ingredientsSelected
          && ingredientsSelected.map((ingredient, index) => {
            return (
              <IngredientBoxDelete 
              ing={ingredient} 
              key={index}
              deleteIngredient={this.props.deleteIngredient}/>
            )
          }))}
      </form>
    )
  }
}
