import React, { Component } from 'react'

export default class IngredientBoxAdd extends Component {
//   constructor() {
//     super();
//     this.key = this.props.key
// }
  render() {
    return (
      <div id="ingredient">
        <p>{this.props.name}</p>
        <button onClick={() => this.props.addIngredient(this.props.name)}>+</button>
        {/* <button onClick={this.props.key => this.props.addIngredient(this.props.key)}></button> */}
      </div>
    )
  }
}
