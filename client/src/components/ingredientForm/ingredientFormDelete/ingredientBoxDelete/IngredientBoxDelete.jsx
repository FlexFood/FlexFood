import React, { Component } from "react";
import "./IngredientBoxDelete.css";
export default class IngredientBoxDelete extends Component {
  render() {
    // console.log('Estoy en delete Box y me llega fn delete')
    // console.log(this.props)
    return (
      <div className="ingredient" id="delete-ingredient">
        <div id="aux-delete">
          <p>{this.props.img}</p>
          <p>|</p>
          <p>{this.props.ing}</p>
        </div>
        <button className="rubis-btn"
          onClick={e => {
            e.preventDefault();
            this.props.deleteIngredientSelected(this.props.ing);
          }}
        >
          🗑
        </button>
      </div>
    );
  }
}
