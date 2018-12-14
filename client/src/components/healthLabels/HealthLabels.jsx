import React, { Component } from "react";

export default class HealthLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }


  checkedLabels = () => {
    this.state.user.healthLabels.map(label => {
      label = `${label}`;
      this.setState({ ...this.state, [label]: "checked" });
    });
  };


  componentWillMount() {
    this.checkedLabels();
  }

  
  render() {
    console.log();

    return this.state ? (
      <div>
        <h3>Alergenos</h3>
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="alcohol-free"
            onChange={e => this.props.handleChange(e)}
            checked={this.state["alcohol-free"]}
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
            checked={this.state["crustacean-free"]}
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
            checked={this.state["dairy-free"]}
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
            checked={this.state["egg-free"]}
          />
          Sin huevo
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="fish-free"
            checked={this.state["fish-free"]}
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
            checked={this.state["gluten-free"]}
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
            checked={this.state["kosher"]}
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
            checked={this.state["low-potassium"]}
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
            checked={this.state["low-sugar"]}
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
            checked={this.state["paleo"]}
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
            checked={this.state["penaut-free"]}
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
            checked={this.state["pescatarian"]}
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
            checked={this.state["pork-free"]}
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
            checked={this.state["soy-free"]}
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
            checked={this.state["sugar-conscisious"]}
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
            checked={this.state["tree-nut-free"]}
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
            checked={this.state["vegetarian"]}
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
            checked={this.state["vegan"]}
            onChange={e => this.props.handleChange(e)}
          />
          Vegana
        </label>
      </div>
    ): "";
  }
}
