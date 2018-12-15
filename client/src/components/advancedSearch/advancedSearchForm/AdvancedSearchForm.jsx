import React, { Component } from 'react';
import './AdvancedSearchForm.css';
import { Link } from "react-router-dom";
import HealthLabels from "../../healthLabels";
import DietLabels from "../../dietLabels";
import IngredientBoxDelete from "../ingredientBox/ingredientBoxDelete";

export default class AdvancedSearchForm extends Component {


  render() {
    // console.log('Estoy en Form y me llega la fn deleteIngredient')
    // console.log(this.props)
    var ingredientsSelected = this.props.ingredientsSelected;
    return (
      
      <form id="advancedSearchForm" onSubmit={this.props.handleFormAdvancedSubmit}>
        <div id="ingredientsSelected">
          {(ingredientsSelected
            && ingredientsSelected.map((ingredient, index) => {
              return (
                <IngredientBoxDelete
                  ing={ingredient}
                  key={index}
                  deleteIngredient={this.props.deleteIngredient} />
              )
            }))}
        </div>
        <HealthLabels handleChange={this.props.handleChange} user={this.props.user} />
        <DietLabels handleChange={this.props.handleChange} />
        <input type="submit" value="Buscar" />
      </form>
    )
  }
}
