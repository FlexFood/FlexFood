import React, { Component } from 'react'
import "./IngredientBoxAdd.css"
export default class IngredientBoxAdd extends Component {
  render() {
    return (
      <button className="ingredient" onClick={(e) => { e.preventDefault();this.props.addIngredientSelected(this.props.name)}}>
        <p>{this.props.img}</p>
        <p className="divisor">|</p>
        <p>{this.props.name}</p>
      </button>
    )
  }
}

