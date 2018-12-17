import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import './AdvancedSearch.css'

import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";
import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import HealthLabels from '../healthLabels'
//import AdvancedSearchForm from "./advancedSearchForm";
//import ingredients from '../../ingredients.json';

import EdamamService from '../../services/EdamamService';

export default class AdvancedSearch extends Component {
    constructor() {
        super();
        this.state = {
            //ingredients,
            searchArray: null,
            ingredientsSelected: [],
            search: "",
            healthLabels: [],
        }

        this.edamamService = new EdamamService()


    }

    //LÓGICA DEL --INGRSIENT-SELECTED--

  addIngredientSelected = inputLabel => {
    console.log(inputLabel, 'Pasa por añadir ingrSeleccionado')
    let ingredientsSelected = this.state.ingredientsSelected;

    //La idea es que solo pushee si no hay otro igual en seleccionados
    if (!this.state.ingredientsSelected
      .find(ingredient => ingredient === inputLabel))
      ingredientsSelected.push(inputLabel);
    this.setState({
      ingredientsSelected
    });
  };

  deleteIngredientSelected = event => {
    console.log(event, this.state.ingredientsSelected);
    var ingredientsSelected = this.state.ingredientsSelected;
    ingredientsSelected.splice(ingredientsSelected.indexOf(event), 1);

    //QUE ACTUALICE EN APP

    this.setState({
      ingredientsSelected
    });
  };


    //HEALTHLABELS
    handleChange = e => {

        let inputLabel = e.target.value;
        let healthLabels = this.state.healthLabels;
        (!healthLabels.some(label => label === inputLabel))
            ? healthLabels.push(inputLabel)
            : healthLabels.splice(healthLabels.indexOf(inputLabel), 1)


        this.setState({ ...this.state, healthLabels });
    };

    componentDidMount() {
        this.userDefault();
    }

    userDefault = healthLabels => {
        if (this.props.user)
            healthLabels = this.props.user.healthLabels;
        this.setState({
            healthLabels
        });
    }
    
    //API

    handleFormSubmit = e => {
        e.preventDefault();
    
        console.log('Pasa por handleFormAdvSubm en App')
        console.log(this.state)
    
        let { ingredientsSelected, healthLabels } = this.state;
    
        if (
          Object.values({ ingredientsSelected, healthLabels }).every(
            element => !element.length
          )
        ) {
          console.log("No pudesn estar todos vacios!!!!!!!!!!!!!");
          return;
        }
    
        this.edamamService
          .advancedSearch({ ingredientsSelected, healthLabels })
          .then(recipes => {
            console.log('Respuesta en front')
            console.log(recipes)
    
            this.setState({
              ...this.state,
              recipes: recipes.data,
              redirectToRecipes: true
            });
    
          });
      };


    render() {
        // if (this.props.redirectToRecipes) {
        //     return <Redirect to="/recipes" />
        // }
        return (
            <form id="advancedSearch" onSubmit={this.handleFormSubmit}>

                <section className="left">
                    <IngredientFormAdd addIngredientSelected={this.addIngredientSelected} />
                </section>
                <section className="center">
                    <IngredientFormDelete 
                    deleteIngredientSelected={this.deleteIngredientSelected}
                    ingredientsSelected={this.state.ingredientsSelected}
                    />
                </section>
                <section className="rigth">
                    <HealthLabels handleChange={this.handleChange} user={this.props.user} />
                </section>

                <input type="submit" value="Search yours recipes!!" />

            </form>
        )
    }
}
