import React, { Component } from 'react'
import "./IngredientBox.css";

export default class IngredientBox extends Component {
  render() {
    return (
      <div id="ingredient">
        <p>{this.props.name}</p>
        {/* <img src={this.props.img} alt=""/> */}
      </div>
    )
  }
}
