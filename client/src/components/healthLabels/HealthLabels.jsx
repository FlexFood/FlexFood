import React, { Component } from "react";

export default class HealthLabels extends Component {
  constructor() {
    super();
    this.state = {

    };


  }

  checkedLabelsInit = () => {
    this.props.user.healthLabels.map(label => {
      label = `${label}`;
      this.setState({ ...this.state, [label]: "checked" });
    });
  };

  //LO HE CAMBIADO PARA MEAL Y ESTAÄ
  //SIN COMPROBAR EN ADVANCEDSEARCH

  checkedLabels = (e) => {
    console.log(e)
    let inputLabel = e.target.value;
    let healthLabels = this.state;

    console.log(Object.keys(healthLabels),'Array q mapeo con las keys')
    Object.keys(healthLabels).map(label => {
      console.log(label, 'propiedad la quita y la pone')
      if (label === inputLabel) {
        console.log('hay eiqueta en el componente healthhhhalbel');
        delete healthLabels[inputLabel];
      }
      else {
        label = `${label}`;
        this.setState({ ...this.state, [label]: "checked" });
      }
    });
  };

  componentWillMount() {
    this.checkedLabelsInit();
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
          />
          Paleo
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="healthLabels"
            value="peanut-free"
            checked={this.state["peanut-free"]}
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels(e);
            }}
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
            onChange={e => {
              this.props.handleChange(e);
              this.checkedLabels();
            }}
          />
          Vegana
        </label>
      </div>
    ) : (
        ""
      );
  }
}