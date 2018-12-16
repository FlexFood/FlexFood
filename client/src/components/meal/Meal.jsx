import React, { Component } from 'react'
import HealthLabels from '../healthLabels';

//import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";

import EdamamService from "../../services/EdamamService";

export default class Meal extends Component {
  constructor() {
    super();
    this.state = {
      name: Date.now(),
      //API
      ingredientsSelected: [],  //ingredientForm component
      healthLabels: [] //labelInitUser // Por defecto lo del user 
    }
    this.edamamService = new EdamamService();
  }

  componentDidMount() {
    this.userDefault()
  }

  userDefault = healthLabels => {
    healthLabels = this.props.user.healthLabels;
    this.setState({
      healthLabels
    });
  }


  //en app  handleChangeChecked
  //toggle en el array helathlabels
  handleChange = e => {

    let inputLabel = e.target.value;
    let healthLabels = this.state.healthLabels;

    if (!healthLabels.some(label => label === inputLabel)) {
      console.log('No hay etiqueta, la añado')
      healthLabels.push(inputLabel);
    }
    else {
      console.log('Hay etiqueta, la quito')
      healthLabels.splice(healthLabels.indexOf(inputLabel), 1);
    }

    //const { value } = e.target;
    this.setState({ ...this.state, healthLabels });
  };


  handleChangeChecked = e => {
    const { name, value } = e.target;
    let array = [...this.state[name]];



    if (e.target.checked) {
      array.push(value);
      this.setState({ ...this.state, [name]: array });
    } else {
      array.splice(array.indexOf(value), 1);
      this.setState({ ...this.state, [name]: array });
    }
  };


  //API

  // handleFormAdvancedSubmit = e => {
  //   e.preventDefault();

  //   console.log('Pasa por handleFormAdvSubm en App')
  //   console.log(this.state)

  //   let { ingredientsSelected, healthLabels } = this.state;

  //   if (
  //     Object.values({ ingredientsSelected, healthLabels }).every(
  //       element => !element.length
  //     )
  //   ) {
  //     console.log("No pudesn estar todos vacios!!!!!!!!!!!!!");
  //     return;
  //   }

  //   this.edamamService
  //     .advancedSearch({ ingredientsSelected, healthLabels })
  //     .then(recipes => {
  //       console.log('Respuesta en front')
  //       console.log(recipes)

  //       this.setState({
  //         ...this.state,
  //         recipes: recipes.data,
  //         redirectToRecipes: true
  //       });

  //     });
  // };


  handleChangeName = e => {
    const { value } = e.target;
    this.setState({ ...this.state, name: value });
  };

  render() {
    // if(this.props) {
    //   debugger
    //   this.handleChange(this.props.user.healthLabels)
    // }
    return (
      <div id="meal">

        <h2>Menu {this.state.name}</h2>


        <form id="form-meal" onSubmit={this.props.handleFormAdvancedSubmit}>
          <section className="left">
            <input id="name-meal"
              type="text"
              placeholder="Menu's name..."
              onChange={e => this.handleChangeName(e)}
            />
          </section>
          <section className="center">
            <p>Componente:ingredientFormDelete</p>
            <p>Radio Buton economic/variado</p>
          </section>
          <section className="rigth">
            <HealthLabels handleChange={this.handleChange} user={this.props.user} />
          </section>
          {/* <HealthLabels /> */}
          <input type="submit" value="Search yours weekly menu!!" />
        </form>


      </div>

    )
  }
}