import React, { Component } from "react";

export default class DietLabels extends Component {
  render() {
    return (
      <div>
        <h3>Tipo de dieta</h3>
        <label>
          <input
            type="checkbox"
            name="dietLabels"
            value="low-sodium"
            onChange={e => this.props.handleChange(e)}
            // checked={this.state["low-sodium"]}
          />
          Bajo en sodio
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="dietLabels"
            value="low-fat"
            onChange={e => this.props.handleChange(e)}
            // checked={this.state["low-fat"]}
          />
          Bajo en grasa
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="dietLabels"
            value="low-carb"
            onChange={e => this.props.handleChange(e)}
            // checked={this.state["low-carb"]}
          />
          Bajo en H. de carbono
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="dietLabels"
            value="high-protein"
            onChange={e => this.props.handleChange(e)}
            // checked={this.state["high-protein"]}
          />
          Alto en proteina
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="dietLabels"
            value="high-fiber"
            onChange={e => this.props.handleChange(e)}
            // checked={this.state["high-fiber"]}
          />
          Alto en fibra
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="dietLabels"
            value="balanced"
            onChange={e => this.props.handleChange(e)}
            // checked={this.state["balanced"]}
          />
          Equilibrada
        </label>
        <br />
      </div>
    );
  }
}
