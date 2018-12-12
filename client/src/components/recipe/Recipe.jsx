import React, { Component } from 'react'

export default class Recipe extends Component {
  
  render() {
    console.log(this)
    return (
      <div>
        <h1>{this.props.recipe.recipe.label}</h1>
      </div>
    )
  }
}
