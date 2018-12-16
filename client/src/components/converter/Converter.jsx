import React, { Component } from "react";

export default class Converter extends Component {
  constructor() {
    super();
    this.state = {
      originNumber: "",
      finalNumber: "",
      recipe: [],
      qty: "",
      ingredient: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let { qty, ingredient } = this.state;

    qty = qty / this.state.originNumber;

    this.state.recipe.push({ qty, ingredient });
    this.setState({ qty: "", ingredient: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  resetCnverter = e => {
    this.setState({
      ...this.state,
      originNumber: "",
      finalNumber: "",
      recipe: [],
      qty: "",
      ingredient: ""
    });
  };

  render() {
    return (
      <div id="converter">
        <div id="original-recipe">
          <label>Original Number</label>
          <input
            type="text"
            name="originNumber"
            onChange={e => this.handleChange(e)}
            value={this.state.originNumber}
          />
          <label>Final Number</label>
          <input
            type="text"
            name="finalNumber"
            onChange={e => this.handleChange(e)}
            value={this.state.finalNumber}
          />
          <form onSubmit={this.handleFormSubmit}>
            <label>Quantity</label>
            <input
              type="text"
              name="qty"
              onChange={e => this.handleChange(e)}
              value={this.state.qty}
            />
            <label>Ingredient</label>
            <input
              type="text"
              name="ingredient"
              onChange={e => this.handleChange(e)}
              value={this.state.ingredient}
            />
            <input type="submit" value="Converter" />
          </form>
          <table>
            <caption>Original recipe</caption>
            <thead>
              <tr>
                <td>QTY</td>
                <td>Ingrdient</td>
              </tr>
            </thead>
            <tbody>
              {this.state.recipe.map(line => {
                return (
                  <div>
                    <td>{(line.qty * this.state.originNumber).toFixed(1)}</td>
                    <td>{line.ingredient}</td>
                  </div>
                );
              })}
            </tbody>
          </table>
          <table>
            <caption>Converted recipe</caption>
            <thead>
              <tr>
                <td>QTY</td>
                <td>Ingrdient</td>
              </tr>
            </thead>
            <tbody>
              {this.state.recipe.map(line => {
                return (
                  <div>
                    <td>{(line.qty * this.state.finalNumber).toFixed(1)}</td>
                    <td>{line.ingredient}</td>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
        <button onClick={this.resetCnverter}>Clear</button>
      </div>
    );
  }
}
