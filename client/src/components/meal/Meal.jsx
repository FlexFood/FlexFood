import React, { Component } from 'react'

import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";
import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import HealthLabels from '../healthLabels';


import EdamamService from "../../services/EdamamService";

export default class Meal extends Component {
  constructor() {
    super();
    this.state = {
      name: Date.now(),
      days: 5,
      //API
      ingredientsSelected: [],  //ingredientForm component
      healthLabels: [] //labelInitUser // Por defecto lo del user 
    }
    this.edamamService = new EdamamService();
  }

  componentDidMount() {
    this.userDefault();
    this.edamamService.menuLunchSearch()
    .then(recipes =>{
      console.log(recipes,"recipes for LUNCH")
      this.edamamService.menuDinnerSearch()
      .then(recipes =>{
        console.log(recipes,"recipes for DINNER")
      })

    });
  }

  userDefault = healthLabels => {
    healthLabels = this.props.user.healthLabels;
    this.setState({
      healthLabels
    });
  }


  //LÓGICA DE --HEALTHLABEL-- 
  //PARA MANDAR AL SERVICE
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

  //LÓGICA DEL --INGRSIENT-SELECTED--

  // addIngredientSelected = inputLabel => {
  //   console.log(inputLabel, 'Pasa por añadir ingrSeleccionado')
  //   let ingredientsSelected = this.state.ingredientsSelected;

  //   //La idea es que solo pushee si no hay otro igual en seleccionados
  //   if (!this.state.ingredientsSelected
  //     .find(ingredient => ingredient === inputLabel))
  //     ingredientsSelected.push(inputLabel);
  //   this.setState({
  //     ingredientsSelected
  //   });
  // };

  // deleteIngredientSelected = event => {
  //   console.log(event, this.state.ingredientsSelected);
  //   var ingredientsSelected = this.state.ingredientsSelected;
  //   ingredientsSelected.splice(ingredientsSelected.indexOf(event), 1);

  //   //QUE ACTUALICE EN APP

  //   this.setState({
  //     ingredientsSelected
  //   });
  // };



  ///INTENTAR JUTAR LOS TRES CON ALGO COMO ESTO 
  // handleChangeChecked = e => {
  //   const { name, value } = e.target;
  //   let array = [...this.state[name]];

  //   if (e.target.checked) {
  //     array.push(value);
  //     this.setState({ ...this.state, [name]: array });
  //   } else {
  //     array.splice(array.indexOf(value), 1);
  //     this.setState({ ...this.state, [name]: array });
  //   }
  // };








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
  handleChangeName = e => {
    const { value } = e.target;
    this.setState({ ...this.state, days: value });
  };

  render() {
    // if(this.props) {
    //   debugger
    //   this.handleChange(this.props.user.healthLabels)
    // }
    return (
      <div id="menu">

        <h2>Menu {this.state.name}</h2>


        <form id="form-menu" onSubmit={this.props.handleFormAdvancedSubmit}>

          <section className="left">
            <input id="name-menu"
              type="text"
              placeholder="Menu's name..."
              onChange={e => this.handleChangeName(e)}
            />
            <select id="days-menu"
            placeholder="Menu's days [1-7]"
            onChange={e => this.handleChangeDay(e)}
            >
              <option type="number" value="1">1</option>
              <option type="number" value="2">2</option>
              <option type="number" value="3">3</option>
              <option type="number" value="4">4</option>
            </select>
            <IngredientFormAdd addIngredientSelected={this.addIngredientSelected} />
          </section>
          <section className="center">
            <IngredientFormDelete delteIngredientSelected={this.deleteIngredientSelected} />
            <p>calories/range || excluded</p>
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