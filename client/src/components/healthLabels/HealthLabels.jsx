import React, { Component } from "react";
import "./HealthLabels.css"

export default class HealthLabels extends Component {
  constructor() {
    super();
    this.state = {};
  }

  checkedLabelsInit = () => {
    this.props.user.healthLabels.map(label => {
      label = `${label}`;
      this.setState({ ...this.state, [label]: "checked" });
    });
  };

  //LO HE CAMBIADO PARA MEAL Y ESTAÄ
  //SIN COMPROBAR EN ADVANCEDSEARCH

  checkedLabels = e => {
    console.log(e);
    let inputLabel = e.target.value;
    let healthLabels = this.state;

    console.log(Object.keys(healthLabels), "Array q mapeo con las keys");
    Object.keys(healthLabels).map(label => {
      console.log(label, "propiedad la quita y la pone");
      if (label === inputLabel) {
        console.log("hay eiqueta en el componente healthhhhalbel");
        delete healthLabels[inputLabel];
      } else {
        label = `${label}`;
        this.setState({ ...this.state, [label]: "checked" });
      }
    });
  };

  componentWillMount() {
    this.checkedLabelsInit();
  }

  render() {
    return this.state ? (
      <div id="health-labels">
        <div id="diets">
          <h2>Diets</h2>
          <hr id="line-health"/>
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
            Vagetarian
          </label>
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
            Vegan
          </label>
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
          <label>
            <input
              type="checkbox"
              name="healthLabels"
              value="high-fiber"
              checked={this.state["high-fiber"]}
              onChange={e => this.props.handleChange(e)}
              // checked={this.state["high-fiber"]}
            />
            High-Fiber
          </label>
          <label>
            <input
              type="checkbox"
              name="healthLabels"
              value="high-protein"
              checked={this.state["high-protein"]}
              onChange={e => this.props.handleChange(e)}
              // checked={this.state["high-protein"]}
            />
            High-Protein
          </label>
          <label>
            <input
              type="checkbox"
              name="healthLabels"
              value="low-carb"
              checked={this.state["low-carb"]}
              onChange={e => this.props.handleChange(e)}
              // checked={this.state["low-carb"]}
            />
            Low-Carb
          </label>
          <label>
            <input
              type="checkbox"
              name="healthLabels"
              value="low-fat"
              checked={this.state["low-fat"]}
              onChange={e => this.props.handleChange(e)}
              // checked={this.state["low-fat"]}
            />
            Low-Fat
          </label>
          <label>
            <input
              type="checkbox"
              name="healthLabels"
              value="low-sodium"
              checked={this.state["low-sodium"]}
              onChange={e => this.props.handleChange(e)}
              // checked={this.state["low-sodium"]}
            />
            Low-Sodium
          </label>
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
            Low-sugar
          </label>
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
            Alcohol-Free
          </label>
          <label>
            <input
              type="checkbox"
              name="healthLabels"
              value="balanced"
              checked={this.state["balanced"]}
              onChange={e => this.props.handleChange(e)}
              // checked={this.state["balanced"]}
            />
            Balanced
          </label>
        </div>
        
        <div id="allergies">
        <h2>Allergies</h2>
        <hr id="line-health"/>
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
            Gluten-Free
          </label>
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
            Dairy-free
          </label>
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
            Egg-Free
          </label>
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
            Soy-Free
          </label>
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
            Fish-free
          </label>
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
            Crustacean-Free
          </label>
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
            Tree-Nut-Free
          </label>
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
            Peanut-Free
          </label>
        </div>
      </div>
    ) : (
      ""
    );
  }
}


{/* <label>
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
</label> */}
