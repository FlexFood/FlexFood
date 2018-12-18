import React, { Component } from 'react'
import "./IngredientBoxAdd.css"
export default class IngredientBoxAdd extends Component {
  render() {
    return (
      <div id="ingredient">
        <p>{this.props.name}</p>
        <button onClick={(e) => { e.preventDefault();this.props.addIngredientSelected(this.props.name)}}>+</button>
      </div>
    )
  }
}

