import React, { Component } from 'react'

//import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";
//import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import HealthLabels from '../healthLabels';
import MenuSave from './menuSave'


import EdamamService from "../../services/EdamamService";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      name: Date.now(),
      //API
      days: 5,
      //ingredientsSelected: [],  //ingredientForm component
      healthLabels: [], //labelInitUser // Por defecto lo del user 
      menuSave: false
    }
    this.edamamService = new EdamamService();
  }

  componentDidMount() {
    this.userDefault();
  }

  userDefault = healthLabels => {
    healthLabels = this.props.user.healthLabels;
    this.setState({
      healthLabels
    });
  }


  //LÓGICA DE --HEALTHLABEL-- 
  //Cambiar por el ternario de Search

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
  
  handleFormMealSubmit = e => {
    e.preventDefault();
    
    let { days, healthLabels } = this.state;
    
    this.edamamService
    .menuLunchSearch({ days, healthLabels })
    .then(recipesLunch => {
      console.log(recipesLunch, "recipes for LUNCH")
      this.setState({
        ...this.state,
        recipesLunch: recipesLunch.data
      });
      this.edamamService
      .menuDinnerSearch({ days, healthLabels })
        .then(recipesDinner => {
          console.log(recipesDinner, "recipes for DINNER")
          this.setState({
            ...this.state,
            recipesDinner: recipesDinner.data,
            menuSave: true
          });
        })

    });
  };


  handleChangeName = e => {
    const { value } = e.target;
    this.setState({ ...this.state, name: value });
  };
  handleChangeDays = e => {
    const { value } = e.target;
    this.setState({ ...this.state, days: value });
  };

  render() {

    var menuSave = this.state.menuSave ? (
      <MenuSave 
      healthLabels= {this.state.healthLabels}
      days= {this.state.days}
      name= {this.state.name}
      userID= {this.props.user._id}
      recipesLunch={this.state.recipesLunch}
      recipesDinner={this.state.recipesDinner} />
    ) : (
      ""
    );

    return (
      <div id="menu">

      {menuSave}

        <h2>Menu {this.state.name}</h2>


        <form id="form-menu" onSubmit={this.handleFormMealSubmit}>

          <section className="left">
            <input id="name-menu"
              type="text"
              placeholder="Menu's name..."
              onChange={e => this.handleChangeName(e)}
            />
            <p>Number of days</p>
            <select id="days-menu"
              // placeholder="Menu's days [1-7]"
              onChange={e => this.handleChangeDays(e)}
            >
              <option type="number" value="1">1</option>
              <option type="number" value="2">2</option>
              <option type="number" value="3">3</option>
              <option type="number" value="4">4</option>
            </select>
          </section>
          <section className="center">
            {/* <IngredientFormAdd addIngredientSelected={this.addIngredientSelected} />
            <IngredientFormDelete delteIngredientSelected={this.deleteIngredientSelected} /> */}
            <p>calories/range || excluded</p>
          </section>
          <section className="rigth">
            <HealthLabels handleChange={this.handleChange} user={this.props.user} />
          </section>
          <input type="submit" value="Search yours weekly menu!!" />
        </form>


      </div>

    )
  }
}