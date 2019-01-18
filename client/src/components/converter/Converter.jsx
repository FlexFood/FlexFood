import React, { Component } from "react";
import "./Converter.css";

export default class Converter extends Component {
  constructor() {
    super();
    this.state = {
      recipe: []
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
        <div id="aux-converter">
          <div className="block-converter space-b">
            <div>
              <h2>Enter the recipe data</h2>
              <hr className="line" />
              <form>
                <label>Original yield</label>
                <input
                  type="number"
                  name="originNumber"
                  onChange={e => this.handleChange(e)}
                  value={this.state.originNumber}
                />
                <label>Final yield</label>
                <input
                  type="number"
                  name="finalNumber"
                  onChange={e => this.handleChange(e)}
                  value={this.state.finalNumber}
                />
                <hr className="line" />
              </form>
              <form onSubmit={this.handleFormSubmit}>
                <label>Quantity</label>
                <input
                  type="number"
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
                <hr className="line" />
                <input
                  id="add-converter-btn"
                  type="submit"
                  value="Add ingredient"
                />
              </form>
            </div>
            <button onClick={this.resetCnverter}>Clear</button>
          </div>
          <div className="block-converter">
            <h2>Original recipe</h2>
            <hr className="line" />
            <table>
              <thead>
                <tr>
                  <td className="qty-column">QTY</td>
                  <td>Ingrdient</td>
                </tr>
              </thead>
              <tbody>
                {this.state.recipe.map(line => {
                  return (
                    <tr>
                      <td className="qty-column">
                        {(line.qty * this.state.originNumber).toFixed(1)}
                      </td>
                      <td>{line.ingredient}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="block-converter">
            <h2>Converted recipe</h2>
            <hr className="line" />
            <table>
              <thead>
                <tr>
                  <td className="qty-column">QTY</td>
                  <td>Ingrdient</td>
                </tr>
              </thead>
              <tbody>
                {this.state.recipe.map(line => {
                  return (
                    <tr>
                      <td className="qty-column">
                        {(line.qty * this.state.finalNumber).toFixed(1)}
                      </td>
                      <td>{line.ingredient}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
