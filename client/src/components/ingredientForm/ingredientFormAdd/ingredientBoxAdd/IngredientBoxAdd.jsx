import React, { Component } from 'react'

export default class IngredientBoxAdd extends Component {
//   constructor() {
//     super();
//     this.key = this.props.key
// }
  render() {
    //console.log(this.props)
    return (
      <div id="ingredient">
        <p>{this.props.name}</p>
        <button onClick={(e) => { e.preventDefault();this.props.addIngredientSelected(this.props.name)}}>+</button>
      </div>
    )
  }
}

