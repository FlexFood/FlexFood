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
        <br />
        <h3>Tipo de dieta</h3>
        <label>
          <input
            type="checkbox"
            name="dietLabels"
            value="low-sodium"
            checked={this.state["low-sodium"]}
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
            checked={this.state["low-fat"]}
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
            checked={this.state["low-carb"]}
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
            checked={this.state["high-protein"]}
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
            checked={this.state["high-fiber"]}
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
            checked={this.state["balanced"]}
            onChange={e => this.props.handleChange(e)}
            // checked={this.state["balanced"]}
          />
          Equilibrada
        </label>
      </div>
    ) : (
        ""
      );
  }
}