import React, { Component } from "react";

export default class HealthLabels extends Component {
  render() {
    return (
      <div>
        <h3>Alergenos</h3>
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="alcohol-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin alcohol
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="crustacean-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin crustaceos
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="dairy-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin lactosa
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="egg-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin huevo
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="fish-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin pescado
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="gluten-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin gluten
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="kosher"
            onChange={e => this.props.handleChange(e)}
          />
          Kosher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="low-potassium"
            onChange={e => this.props.handleChange(e)}
          />
          Bajo en potasio
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="low-sugar"
            onChange={e => this.props.handleChange(e)}
          />
          Bajo en azucar
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="paleo"
            onChange={e => this.props.handleChange(e)}
          />
          Paleo
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="penaut-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin cacahuete
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="pescatarian"
            onChange={e => this.props.handleChange(e)}
          />
          Pescateriano
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="pork-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin cerdo
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="soy-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin soja
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="sugar-conscisious"
            onChange={e => this.props.handleChange(e)}
          />
          Muy bajo contenido en azucar
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="tree-nut-free"
            onChange={e => this.props.handleChange(e)}
          />
          Sin nueces
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="vegetarian"
            onChange={e => this.props.handleChange(e)}
          />
          Vagetariana
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="vegan"
            onChange={e => this.props.handleChange(e)}
          />
          Vegana
        </label>
      </div>
    );
  }
}
