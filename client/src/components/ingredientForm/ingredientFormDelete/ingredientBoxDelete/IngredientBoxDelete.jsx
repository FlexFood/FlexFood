import React, { Component } from 'react'

export default class IngredientBoxDelete extends Component {
  render() {
    // console.log('Estoy en delete Box y me llega fn delete')
    // console.log(this.props)
    return (
      <div id="ingredient">
        <p>{this.props.ing}</p>
        <button onClick={(e) => { e.preventDefault();this.props.deleteIngredient(this.props.ing)}}>-</button>
      </div>
    )
  }
}
